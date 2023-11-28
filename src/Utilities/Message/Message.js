import './Message.css';
export const ErrorMessage = (msg) => {
    return <div className="show__message err__message"> {msg}</div>

}
export const SuccessMessage = (msg) => {
    return <div className="show__message success__message"> {msg}</div>
}