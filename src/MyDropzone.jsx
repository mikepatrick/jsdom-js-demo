import * as React from 'react'
import Dropzone from 'react-dropzone'

const MyDropzone = () => {
    debugger;
    const onDrop = ( files ) =>{
        debugger;
        fileToBase64(files[0])
            .then(base64Url => {
                debugger;
                return resizeBase64Img({base64Url})
            })
            .then( resizedURL => {
                debugger;
                console.log(resizedURL.substr(0, 50))
            })
    }
    return (
        <div>
            <Dropzone onDrop={onDrop}>
                Some text
            </Dropzone>
        </div>
    );
};

const fileToBase64 = (file) => {
    debugger;
    return new Promise((resolve, reject) => {
        debugger;
        const reader = new FileReader()
        reader.onload = () => {
            debugger;
            return resolve(reader.result)
        }
        reader.onerror = (error) => {
            debugger;
            return reject(error)
        }
        debugger;
        reader.readAsDataURL(file)
    })
}

const resizeBase64Img = ({base64Url, width = 50}) => {
    debugger;
    const canvas = document.createElement('canvas')
    canvas.width = width
    const context = canvas.getContext('2d')
    const img = new Image()

    return new Promise((resolve, reject) => {
        img.onload = () => {
            const imgH = img.height
            const imgW = img.width
            const ratio = imgW / imgH
            canvas.height = width / ratio
            context.scale(canvas.width / imgW, canvas.height / imgH)
            context.drawImage(img, 0, 0)
            resolve(canvas.toDataURL())
        }

        img.onerror = (error) => {
            reject(error)
        }

        img.src = base64Url
    })
}

export default MyDropzone;