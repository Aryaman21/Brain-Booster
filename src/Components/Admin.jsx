import React from 'react'
import {app} from '../Firebase-config';

function admin() {

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file).then(()=>{
            console.log("Upload File", file.name)
        })
        var x = await fileRef.getDownloadURL()
        console.log(x);
        
    }

    const onSubmit = (e) =>{
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label for="file">Upload File:</label>
                <input type="file" id = "file" name="file" placeholder="UPLOAD" onChange={onFileChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default admin
