import './Backdrop.css';
const Backdrop = (props) => {
    return <div onClick={props.hideHandler} className='backdrop'>
        {props.children}
    </div>
}

export default Backdrop;