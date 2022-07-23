import React, { useState } from "react";
import "./header.scss";
import { ReactComponent as LogoSvg } from "../../../../assets/icons/evervault-nav-header.svg";
import { SvgIcon, Link, Box, Popper, Fade } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../../../assets/icons/telegram.svg";
import { ReactComponent as Discord } from "../../../../assets/icons/discord.svg";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="landing-header">
            <div className="landing-header-logo">
                <LogoSvg />
                <span>EVERVAULT</span>
            </div>
            <div className="landing-header-nav-wrap">
                {/* <Link className="tooltip-item" href="https://github.com/Wonderland-Money/wonderland-frontend" target="_blank">
                    <p>GitHub</p>
                </Link> */}
                <Link className="tooltip-item" href="https://twitter.com/EverVaultDAO" target="_blank">
                    <p>Twitter</p>
                </Link>
                <Link className="tooltip-item" href="https://medium.com/@evervault" target="_blank">
                    <p>Medium</p>
                </Link>
                <Link className="tooltip-item" href="https://discord.gg/evervaultdao" target="_blank">
                    <p>Discord</p>
                </Link>
                <Link className="tooltip-item" href="/">
                    {/* <p>Buy EVE</p> */}
                    <p>Coming soon</p>
                </Link>
                {/* <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                    <p className="landing-header-nav-text">Social</p>
                    <Popper className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://github.com/Wonderland-Money/wonderland-frontend" target="_blank">
                                        <SvgIcon color="primary" component={GitHub} />
                                        <p>GitHub</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/wonderland_fi?s=21" target="_blank">
                                        <SvgIcon color="primary" component={Twitter} />
                                        <p>Twitter</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://t.me/joinchat/6UybL5rJMEhjN2Y5" target="_blank">
                                        <SvgIcon viewBox="0 0 32 32" color="primary" component={Telegram} />
                                        <p>Telegram</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://discord.gg/thDHseaHUt" target="_blank">
                                        <SvgIcon color="primary" component={Discord} />
                                        <p>Discord</p>
                                    </Link>
                                </div>
                            </Fade>
                        )}
                    </Popper>
                </Box> */}
            </div>
        </div>
    );
}

export default Header;
