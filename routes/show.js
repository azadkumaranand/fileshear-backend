const router = require('express').Router();

const File = require('../models/files')

router.get('/:uuid', async (req, res)=>{
    try {
        const file = await File.findOne({uuid: req.params.uuid})
        if (!file) {
            return res.render("download", {error: 'Download Link has been Expired.'})
        }
        
        return res.render("download", {
            fileName: file.filename,
            fileSize: file.size,
            uuid: file.uuid,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    } catch (error) {
        return res.render('download', {error: "something went wrong."})
    }
})

module.exports = router;