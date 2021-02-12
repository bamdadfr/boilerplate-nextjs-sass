export default function ApiIndex (req, res) {
    
    switch (req.method) {

        default:
            res
                .json ({
                    'success': true,
                    'method': req.method,
                })
        
    }

}
