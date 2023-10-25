const Footer = () => {
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const hora = actualDate.getHours();
    const minutes = actualDate.getMinutes();
    const seconds = actualDate.getSeconds();
    return (
        <div className="flex justify-center mt-5">
            <p className="footer">Copyrite, Jesus Escalona {actualYear}, {hora}:{minutes}:{seconds}</p> 
               
        </div>
        
    )
}

export {Footer}