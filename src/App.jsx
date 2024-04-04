import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import { users } from "./service/users"
import Header from "./components/header"
import { Container } from "./components/containers";
import Card from "./components/UI/card"

const App = () => {

  const [post, setPosts] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const createUser = (e) => {
    e.preventDefault()
    const newUser = {
      id: uuidv4(),
      name: name,
      age: age
    }

    if (newUser.name.length == 0 || newUser.age.length == 0) {
      toast.error("Please fill in all blank fields!", {
        autoClose: 2500
      })
    } else {
      users.CREATE(newUser).then((response) => {
        toast.success("Successfully created",{
          autoClose: 1800,
        })
        setTimeout(() => {
          window.location.href = "/"
        },1800);
      })
    }
  }

  const delateUser = (id) => {
    users.DELETE(id).then((response) => {
      toast.warning("Successfully deleted", {
        autoClose: 1800,
      })
      setTimeout(() => {
        window.location.href = "/"
      },1800);
    })
  }

  useEffect(() => {
    users
      .GET()
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <div className="mt-[50px] shadow-2xl rounded-xl p-5">
          <p className="text-center font-mono mb-[24px] text-[32px] font-semibold  tracking-wider text-[#2d7185]">Add User</p>
          <form onSubmit={createUser} className="flex flex-col">
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 mb-[20px] outline-none border-[2px] text-[#2d7185] font-medium font-mono text-[18px] focus:border-[#2d7185] duration-200 rounded-[10px]" type="text" placeholder="Enter full name" />
            <input value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 mb-[32px] outline-none border-[2px] text-[#2d7185] font-medium font-mono text-[18px] focus:border-[#2d7185] duration-200 rounded-[10px]" max={70} min={18} type="number" placeholder="Enter your age" />
            <button className="w-full bg-[#2d7185] py-3 text-white text-[20px] font-semibold rounded-[10px] hover:bg-[#48889b] tracking-widest font-mono duration-200">ADD</button>
          </form>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-3 gap-6 py-[60px]">
          {
            post.length &&
            post.map((item, index) => {
              return <Card key={index} data={item} onDelate={delateUser}/>
            })}
        </div>
      </Container>
    </>
  );
};
export default App;