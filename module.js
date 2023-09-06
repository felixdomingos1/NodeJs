const path = require('path')

const getFileExt = () => {
    return path.extname(path.basename(__filename))
}

// naming export
module.exports = {
    fileExt: getFileExt
}

// module.exports = getFileExt // default export