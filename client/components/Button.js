export default ({ children, style, onClick, disabled }) => (
  <button 
    style={style} 
    disabled={disabled}
    onClick={onClick}
  >
    {children}

    <style jsx>{`
      button {
        background-color: #EEEBF5;
        background-image: url("/static/images/metamask.jpg");
        background-repeat: no-repeat;
        border: none;
        border-radius: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #6B6B8E;
        padding: 14px 28px;
        text-align: center;
        cursor: pointer;
      }
      button:focus {
        outline: none;
      }
      button[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `}</style>
  </button>
)