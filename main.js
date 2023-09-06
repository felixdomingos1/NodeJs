// process.stdout.write('what is node.js? \n')
// process.stdin.on('data', (data) => {
//     console.log(data.toString().trim())
//     process.exit()
// })




/* nodejs modules and globals */
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('whats your name?', (answer) => {
//     console.log(answer)
//     process.exit()
// })
// if (a === s) {
    
// }

// const path = require('path')
// const util = require('util')

// console.log(path.join(__dirname, './path/file'))
// console.log(util.log(path.basename(__filename)))




/* Import custom module */
// const fileExts  = require('./module.js')

// console.log(fileExts())
// console.log(fileExts.fileExt())



/* FILE MANAGEMENT with fs module */

// # listing directory files #
// const fs = require('fs')

// const files = fs.readdirSync('./')
// console.log(files)

// # reading files #    
// const fs = require('fs')

// const text = fs.readFileSync('./text.md',  { encoding: 'utf-8' })

// console.log(text)

// # appeding and reading files #
// remove the object that contains the flag property in order to only write a file or replace
// an existing one.
// const fs = require('fs')

// fs.writeFile('new_file.txt',text , { flag: 'a+' }, (err) => {
//     if (err) throw err
// })

// # create directories #
// const fs = require('fs')

// const directName = 'new_dir'


// if (fs.existsSync(directName)) return ;

// fs.mkdir(directName, (err) => {
//     if (err) throw err
// })

// # renaming, moving and removing files #
// const fs = require('fs')

// fs.renameSync('./new_file.txt', './new_file_renamed.txt') // rename
// fs.renameSync('./new_dir/new_file_renamed.txt', './newfile.txt',) // move & rename
// fs.unlinkSync('new_file_renamed.txt') // remove

// # rename move and remove dirs #
// const fs = require('fs')

// // fs.renameSync('./meu', './images_files')
// // fs.renameSync('./new_dir', './images_files/images_list')

// // // empty the images_list folder first..
// fs.readdirSync('./images_files/images_list').forEach(file => {
//     fs.renameSync('./images_files/images_list/' + file, './images_files/' + file)
// })

// ..then try to delete it
// fs.rmdir('./images_files/images_list', (err) => {
//     if (err) throw err
// })

// writable and readable stream
const fs = require('fs')

const readStream = fs.createReadStream('./text.md', 'utf-8')
const writeStream = fs.createWriteStream('./text_copy.md', 'utf-8');
// approach 1
readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('end', () => {
    writeStream.end()
})

//approach 2
//readStream.pipe(writeStream).on('error', (err) => console.log(err))

//writeStream.on('close', () => process.stdout.write('file copied'))



// const https = require('https')
// const fs = require('fs')

// const options = {
//     hostname: 'en.wikipedia.org',
//     port: 443,
//     path: '/wiki/Node.js',
//     method: 'GET',
// }

// const request = https.request(options, (res) => {
//     let responseBody = ""
//     res.setEncoding('utf-8');

//     res.on('data', (chunk) => {
//         console.log('--chunk', chunk.length);
//         responseBody += chunk
//     });

//     res.on('end', () => {
//         fs.writeFile('nodejs.html', responseBody, (err) => {
//             if (err) throw err
//         })
//     })
// })

// request.end()