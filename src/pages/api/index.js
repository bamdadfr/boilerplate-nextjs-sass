export default function (req, res) {

    switch (req.method) {

        default:
            res
                .json ({
                    'success': true,
                    'method': req.method,
                })
        
    }

}
