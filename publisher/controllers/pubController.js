const axios = require('axios');
const dotenv = require("dotenv");
const message = require('../models/message');
const subDetail = require('../models/subDetails');

const {addSubSchema} = require("../helper/Validation");

dotenv.config();


class Publisher {
    static async addSubContent(req, res) {
        const fieldError = addSubSchema(req.body);

        if (fieldError.error)
            return res.status(422).send(fieldError.error.details[0].message);



        const newsub = {
            url: req.body.url.toLowerCase(),
            topic: req.params.topic
        };

        try {
            const msg = await subDetail.create(newsub);
            if (msg) {
                res.status(201).send({
                    status: 201,
                    message: 'subscribed to a topic successfully',
                    data: {
                        url: msg.url,
                        topic: msg.topic
                    }
                });
            }
        } catch (err) {
            res.status(500).send({
                status: 500,
                message: 'Unable to subscribe to topic',
                data: {
                    error: err
                }
            });
            console.log(err);
        }
    }
    static async publishContent(req, res) {
        const fieldError = addTokenVerificationSchema(req.body);
        if (fieldError.error)
            return res.status(422).send(fieldError.error.details[0].message);


        try {
            const sub;
            const subDetails = await subDetail.find({topic: req.params.topic})
            if (subDetails) {
                for (sub of subDetails) {
                    messageData.sub = sub._id;
                    messageData.isPublished = true;

                    const publish = await message.create(messageData)

                    await axios.post(sub.url, {
                      topic: req.params.topic,
                      data: req.body
                  });

                  publish.isDelivered = true;

                  await publish.save();

                  res.status(200).send({status: 200, message: "mesage published successfully", data: publish});
                }
            }

        } catch (error) {}



    }
}
module.exports = Publisher;

