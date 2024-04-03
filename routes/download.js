const router = require('express').Router();
const File = require('../models/files');

router.get('/:uuid', async (req, res)=>{
    try {
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download', {error: "download link has been expired."})
        }
        const filepath = `${__dirname}/../${file.path}`;
        res.download(filepath);
    } catch (error) {
        
    }
})

module.exports = router;