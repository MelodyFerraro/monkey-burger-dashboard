const Footer = ({footer, ...otherProps }) => {
    return (
      <div {...otherProps}>
       <span>{footer}</span>
      </div>
    );
  };
  
  export default Footer;