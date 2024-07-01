import React from "react";

const Menu_btn = ({isSmallScreen, handleMenuOpen, isMenuOpen}) => {
    if (isSmallScreen){
        if (!isMenuOpen){
            return(
                <>
                <div className="menu_way">
                    <button>
                        <span className="menu_btn" onClick={handleMenuOpen}></span>
                    </button>
                </div>
                </>
    )
} else{
    return(
        <>
        <div className="menu_way">
            <button>
                <span className="close" onClick={handleMenuOpen}></span>
            </button>
        </div>
        </>
)
}
};
}

export default Menu_btn;