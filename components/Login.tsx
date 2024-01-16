import React from 'react'

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ open, setOpen }: Props) {
    return (
        <div className="wdcb8sn ui-dialog-overlayer" style={open ? { display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.667)' } : { display: 'none', backgroundColor: 'rgba(0, 0, 0, 0.667)' }}>
            <div className="ui-dialog-wrap" style={{ width: '800px', height: '546px', marginTop: '-273px', marginLeft: '-400px', opacity: 1, transform: 'none' }}>
                <div className="ui-dialog sh1kgj9" style={{ opacity: 1,  visibility: 'visible', transform: 'translateX(0%) scale(1) translateZ(0px)' }}>
                    <button className="close-icon i1gm0mn8 dialog-close" onClick={()=>setOpen(false)}>
                        <svg className="s1ff97qc icon">
                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Close"></use>
                        </svg>
                    </button>
                    <div className="ui-scrollview">
                        <div className="s1bscfa1">
                            <div className="ithbrou">
                                <div className="login-left">
                                    <img alt="" src="/images/bg.png" className="common-left-img" />
                                    <div className="left-text">
                                        <p className="t">Welcome to<span>bc.game</span></p>
                                        <p className="st">Start your game journey now!</p>
                                    </div>
                                </div>
                                <div className="login-right">
                                    <div id="login" className="simple-page smamgpm" style={{ opacity: 1, transform: 'none' }}>
                                        <p className="sign-title"><span>Sign in</span></p>
                                        <form>
                                            <div className="ui-input first-input">
                                                <div className="input-control"><input type="text" tabIndex={1} autoComplete="off" placeholder="Email / Phone Number" required value="mohammedabdurahoof527@gmail.com" /></div>
                                            </div>
                                            <div className="ui-input pjkqlcx">
                                                <div className="input-control"><input type="password" autoComplete="off" tabIndex={2} placeholder="Login Password" required value="aB-8943485194" />
                                                    <svg className="s1ff97qc icon">
                                                        <use xlinkHref="/assets/symbol-defs.ef6a79c4.svg#icon_View"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="forget-wrap">
                                                <div className="forget">Forgot your password?</div>
                                            </div>
                                            <div className="buttons">
                                                <button className="ui-button button-big s-conic">
                                                    <div className="button-inner">Sign in</div>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="newto-regist">
                                            <p>New to bc.game?</p>
                                            <div className="r">Create account</div>
                                        </div>
                                    </div>
                                    <div className="other-sign-wrap">
                                        <div className="line-text">
                                            <div className="l"></div>
                                            <div className="t">Log in directly with</div>
                                            <div className="l"></div>
                                        </div>
                                        <div className="third-group-wrap">
                                            <button id="gg_login" type="button" title="google">
                                                <svg width="12" height="12" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                    <path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z" />
                                                    <path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z" />
                                                </svg>
                                            </button>
                                            {/* Add similar buttons for other third-party logins */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login