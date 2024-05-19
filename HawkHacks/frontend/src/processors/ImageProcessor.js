const imageProcessor = async(file) => {
    const fileRead = new FileReader()
    fileRead.readAsDataURL(file)

    const data = new Promise((resolve,reject)=>{
        fileRead.onload = () => resolve(fileRead.result)

        fileRead.onerror = (error) => reject(error)
    })

    return data

}

export default imageProcessor