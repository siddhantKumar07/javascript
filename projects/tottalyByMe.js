   let users =[
        {
            name: "John Doe",
            description: "Frontend developer who loves React and UI design.",
            image: "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"
        },
        {
            name: "Sarah Smith",
            description: "Backend developer specializing in Node.js and databases.",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww"
        },
        {
            name: "Alex Johnson",
            description: "Full-stack developer passionate about MERN stack.",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww"
        },
        {
            name: "Emma Watson",
            description: "UI/UX designer focused on clean and modern interfaces.",
            image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww"    
        },
        {
            name: "Michael Brown",
            description: "DevOps engineer with expertise in cloud infrastructure.",
            image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Olivia Davis",
            description: "Mobile app developer specializing in iOS and Android.",
            image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
        }
    ]
    let card = document.querySelectorAll(".card");
    let h1 =document.querySelectorAll(".card h1");
    let discription = document.querySelectorAll(".card p"); 
    function showUser(arr) {
        arr.forEach((user, index) => {
            h1[index].textContent = user.name;
            discription[index].textContent = user.description;
            card[index].style.backgroundImage = `url(${user.image})`;
        });
        showUser(users);    
    }