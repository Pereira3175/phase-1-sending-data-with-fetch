// Add your code here
function submitData(useName,useEmail) {
    const formData = {
        name: useName,
        email: useEmail,
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      
     return fetch("http://localhost:3000/users", configurationObject)
     .then(response => response.json())
     .then(data => {
         console.log(data.id.value);

         document.body.innerHTML = data.id;
     })
     .catch(function (error) {
        alert("Error, Will Robinson!!");
        console.log(error.message);
        document.body.innerHTML = error.message;
      });
}

submitData("Steve", "steve@steve.com");
