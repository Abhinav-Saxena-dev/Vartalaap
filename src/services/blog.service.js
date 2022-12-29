import {db} from '../firebase/firebase.utils';

import {collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';

const usersCollectionRef = collection(db, 'users');

export const createBlogDocument = async (user, blog, additionalData) => {
    if(!user) return;

    
    console.log(blog);
    const userDocRef = doc(usersCollectionRef, user.currentUser.id);
    const blogCollectionRef = collection(userDocRef, "blogs")
    const blogDocRef = doc(blogCollectionRef, blog.title)
    const blogDocSnap = await getDoc(blogDocRef);
    
    if(!blogDocSnap.exists()){
      const date = new Date();
      try{
        await setDoc(blogDocRef,{
          ...blog,
          ...additionalData,
        })

        console.log('success');
      }catch(err){
        console.log(err);
      }
    }
    return blogDocRef;
}

export const getAllBlogs = async () => {
    let blogs = []
    const userSnapshot = await getDocs(usersCollectionRef)
    userSnapshot.forEach(async (userDoc) => {
      const userDocRef = doc(usersCollectionRef, userDoc.id);
      const blogCollectionRef = collection(userDocRef, "blogs")
      const blogSnapshot = await getDocs(blogCollectionRef);
      blogSnapshot.forEach((blogDoc) => {
        blogs.push(blogDoc.data())
      })
    })
    return blogs;
}

export const getUserBlogs = async (user_id) => {
  let blogs = []
  const userDocRef = doc(usersCollectionRef, user_id);
  const blogCollectionRef = collection(userDocRef, "blogs")
  const blogSnapshot = await getDocs(blogCollectionRef);
  blogSnapshot.forEach((blogDoc) => {
    blogs.push(blogDoc.data())
  })
  return blogs
}