
class Subscriber {
    static async messageReceived(req, res) {

            console.log(req.body);

                res.status(200).send({
                    status: 200,
                    message: 'Message Received',
                    data: {
                        msg: req.body
                    }
                });


    }

}
module.exports = Subscriber;

