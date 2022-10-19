// import loader from "../styles/loader.scss";
export const Backdrop = props =>{
    const handleClick=()=>{
        if(props.onClose){
            props.onClose();
        }
    }
    return(
        <div onClick={handleClick()} className="loader-overlay"> </div>
    )
}

const Loader=()=>{
    return(
        <>
        <Backdrop></Backdrop>
        <div className="loading-dots"> 
            <div>Loading</div>
            <div className="loading-dots--dots"></div>
            <div className="loading-dots--dots"></div>
            </div>
            
        </>
    )
}
export default Loader;