const File = require('./models/files');
const fs = require('fs');

const db = require('./config/db');

async function deletData () {
    const pastDate = new Date(Date.now() - (24*60*60*1000));
    
    const files = await File.find({createdAt: { $lt:pastDate }});
    console.log(files);
    if(files.length>0){
        files.forEach(file => {
            try {
                fs.unlinkSync(file.path);
                File.deleteOne({ _id: file._id });
                console.log(`${file.filename} deleted successfully!`)
            } catch (error) {
                console.log(`Failed deleting: ${error}`);
            }
        });
    }
}

module.exports = deletData;