import React from 'react';

const Profile=()=>{
    return (
      <div style={{maxWidth:"800px", margin:"0px auto"}}>
        <div style={{
          display:'flex',
          justifyContent:"space-around",
          margin:"18px 0px",
          borderBottom:"1px solid grey"
        }}>
          <div>
            <img style={{width:"160px",height:"160px",borderRadius:"80px",border:"2px solid black"}}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="img1" />
          </div>
          <div>
            <h4>Abhijeet</h4>
             <div style={{display:"flex",justifyContent:"space-between", width:"110%"}}>
              <h5>80 post</h5>
              <h5>85 followers</h5>
              <h5>95 following</h5>
             </div>
          </div>
        </div>
        <div className='postimages'>
          <img className='post' src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="nature1"/>
          <img className='post' src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="nature2"/>
          <img className='post' src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature3"/>
          <img className='post' src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature4"/>
          <img className='post' src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature5"/>
          <img className='post' src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature6"/>
          <img className='post' src="https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature7"/>
          <img className='post' src="https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature8"/>
          <img className='post' src="https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature9"/>
          <img className='post' src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="nature10"/>
          <img className='post' src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="nature11"/>
          <img className='post' src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature12"/>
          <img className='post' src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature13"/>
          <img className='post' src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature14"/>
          <img className='post' src="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature15"/>
          <img className='post' src="https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="nature16"/>
        </div>
      </div>
    )
}

export default Profile;

