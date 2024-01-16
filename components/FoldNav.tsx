// components/FoldNavLinks.tsx

import React, { ReactNode } from 'react';
import '../styles/index.3d6a1389.css'

interface FoldNavLinkProps {
    href: string;
    keepScrollPosition: boolean;
    className?: string;
    children: ReactNode;
    target?: string;
}

const FoldNavLink: React.FC<FoldNavLinkProps> = ({ href, keepScrollPosition, className, children, target }) => (
    <a href={href} keep-scroll-position={keepScrollPosition.toString()} className={className} target={target}>
        {children}
    </a>
);

interface FoldNavProps {
    // Define other necessary props here
}

const FoldNav: React.FC<FoldNavProps> = () => (
    <div className="f11y8lik hidden-scroll-y fold-scroll-wrap">
        <div className="fold-line">
            <div id="bonus-sidebar-link-enter">
                <div className="p5pj97j bonus-link-enter">
                    <div className="nav-item-wrap"><a href="/bonus" keep-scroll-position="true" className="nav-item">
                        <div className="nav-item-left"><svg className="s1ff97qc icon">
                            <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Gift"></use>
                        </svg></div>
                        <div className="nav-item-right"><span>Bonus</span></div>
                    </a></div>
                </div>
            </div>
        </div>
        <div className="b1gyxa15">
            <div className="auto-inner">
                <div className="hover-list-wrap">
                    <div id="bonus-sidebar-list-enter">
                        <div className="bl-l bl-l-2">
                            <div className="bonus-item li-quests" style={{ position: 'relative' }}>
                                <button className="qi1yqdz bonus-item-btn">
                                    <div className="img-wrap">
                                        <img className="img-bg" src="/images/quests.7ae7831a.png" alt="quests" />
                                    </div>
                                </button>
                                <div className="bonus-text">
                                    <p className="t ttu task">Quest</p>
                                </div>
                            </div>
                            <div className="bonus-item li-spin" style={{ position: 'relative' }}>
                                <button className="eea94sw bonus-item-btn">
                                    <div className="enter-animate active">
                                        <div className="spin-anim">
                                            <img className="img-spinbg" src="data:image/png;base64,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"
                                                alt="" />
                                            <img className="img-turntable" src="data:image/png;base64,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"
                                                alt="" />
                                            <img className="img-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAMAAAA0RZgbAAAC91BMVEUAAABYDARfCwRRAABLAABJAABIAABKAABKBQP/1JyIRA2HRAxJAACNUBf80JqJRA355n7905uIRRCIRA2HRQ2HRQ6JRxH//9v+05v5zJn4y5jcroCJRQ6HQw3/87+CQAuISBD/+beIRQ6HRQ6JRw+OSRa5LPH577R8x5750ZT/88/+76/xvpr2xpn45YHvupznqKXzx5P66bDxxZDtwY7KoFyvfDfgsoOWWR2IRQ6FQgz+8K3+7p51PSz/8pv/98+STBP/9ND97aT88srz7cL86pX76In/8L776qPqwILYV9PRc8r14ZbxtKXXgbTkoKThw37/88v24YvXtXPXtm397aLpvIr+8r/nzHDmuIj854SmcDf+8sGjaSqKSRp9OQv/8sb96Y/QoXT765L/88DLmHB+NwuIRg+IRg/86YefaU1nIwX/87NdFQdjKB/a5sDxzYin1bbMM/GdKevdOfG0MemkLufW5L7wd/TFOebaZez24X3WQ+Xq0XPN4rGvRtzkc+X033m1SdX/9M/97J3/89Dsis/hbsL97aru1oPcdb3Ne7vqoqzUhq7+76znzXD/8sj233rev2P765H754Tau3X/88/Tr2Lnzo7/8tHJoU7/883ozW755H+6jEK2h0Xr0HPCl0fXqHfly3CmbEKRURX/77L97JjQoHb/9NLEk2xzMQm5hmG3g2CqdFmFUDr/9NL977D/1Jz/8syzOvOgJO+aJO+mLvGvK+7YYvfhUO/KO+7WRu28M+0KmpEIoY7md/nARfUMmJjlzHD+8sgNlKAMlpz865cIoIf66IDzcf6+M+7+8cL977X97aYMnZX76YvsefrNUffdM/bETPX/88/87J776pAInYv66IXx23nmZ/vCSfXMMfP+8Lz97qoOkaTpb/rVWffVMPbeQ/LUQO/LO++tKu6Bxq2/26tVsKtIqqtsvapgt6qh0aMwoaIinp7jcvinL/HCLvGnJfDcSu+xKu+t1rTr6a7R36o6o6Y1s5M3sJB1vDZKAAAAsXRSTlMABgQKDhIbGB/8ZTsVDe5w/vNQQzUwGwT45t1+elo7KycKXkgiFv7+/fzv3dza2djRw7q5q6KRiIRrV081KiAVEvv7+vrz8fDr5t/a19LR0czCt6+kop6WlpWSj4mJh4aAe25kY15dVU1MOy8pJiX9/fr5+ff19PTy8e/v6+vq6ejl4+Hg2trV1dTT09PQzsvIx8LBwcC7ubeysK6uraubl5OSiXh4cGpmWlpUTEpCMC39GEEeAAADgklEQVRIx9WTVVQbQRSGs9lslEaA0CRAKNDiDsUp1N3d3d3d3d3dXZgqdUkb0iZpCi0Ub5HiUteHDix0Z8jpc0+/zcnZm/3OzL9zb1j/OY7R0Y5/e6Qe1nPHUo/GryCNPZbv7nf6Ul1MqNu56WUzPPZiziaNpunMyQUlpUXFxUWlJQVfJ2o0ms6YMkjfLP7evecPnzx+8/jJw7t3X8fHN9MMwhS1Xv8TV37p9Wo8TMtMN1xxy2yJ540JMCyAyvOK8h/lFVVKYWZAHUSoYy3sZnAtK/wWS+P6vczN1dDV3oH9RyHk9n1ja2Ew9LWsx2KoZ2nnGevZ80SEOnLcOHXEsH4BnrGtJFY2iGJjJdmVtQoNtyGrk1CEhREJGxqNjZgforOMDcPlLBR5eGiTJkOZOsJoDB1VH1Pqj7Jrl9SdqbsntQuzaoApDazCuia1Ys5qWdJ2J2sYBTsZp2CtNrKmbKTVHhzpwMJxGGnXXDu4pjqpbX7cGUbBwzhLuiRvram6JK8OE8EoeBj42qZkx+qmtkje6WRN1FIIa6f+JtNouog0mYItmShID3xS+tD3g1NaSJxtzBQbZ8m+FB/6flvKRqEoxkyJEQkP63RVPXCU6vbYy5koyECESnVVPRit0/VnBgEPs1m6n8Vms/pIFyODgA9EN+lcgiAJH+kWZBDwgQhOTT3Uq9fR1NQD9nJmJtGTGTFw/iOaAeEOhLlDkGNHDOw0yV0A3N1bDzg7nqQdzKDGHmsNBN7t2/uKgezIeIvaDpukuEMUsnWznlayQgUCJ0AHMwgOb7hAuSjt7QvI27Q0PxDIp0g2tojFRbF4Ttz7+zRx2X7Alssh0CQcbg/QNiEhrprshASVOAougyaZIPN9AEl/CUlPh3dtgS2PJNB9hoO1V3Bk/uhOBMkLAQuvo3y47qvkUwQeZeo1nI4KqLARpTeYcRXHT4YpJM8WLMm/gZD/yUvF52Bxz4H1X57duQM/8AteLtMFQVxUISi+Uuny7BbNO3i5dACn0JeGYeBOHT7m3a4hY7ZYhXcAnh3fW9AmI+9mFZ8zpngJzvA4BD4LFmPEijU5ibnQyM2Z5w1CYBJ27VaPUQGvldMSExPbdFQIbPkUnQR3onrLgECsVADgf55LMSOFOBQ3akhQoH9QyAW+BYcxUIfkUDwuhAcFZhfMgRLJgcDnyBLmViXwH/kP+A0MspdQULbX5QAAAABJRU5ErkJggg=="
                                                alt="" />
                                        </div>
                                    </div>
                                </button>
                                <div className="bonus-text">
                                    <p className="t ttu spin">Spin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fold-line">
            <FoldNavLink href="/casino" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Casino"></use>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="/sports" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Sports"></use>
                </svg>
            </FoldNavLink>

            <FoldNavLink href="/racing" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="ig2udpo"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 30 32">
                    <path
                        d="M23.707-0c-0.047 0-0.109 0-0.155 0.016-0.078 0.016-1.54 0.404-2.333 1.182s-1.213 1.804-1.369 2.582c-7.636 0.264-14.993 4.557-14.993 13.702 0 2.364 0.7 6.159 1.757 7.714 0 0 0.995 2.022 5.817 4.728 3.282 1.089 6.579 1.182 7.667 1.182 0.187 0 0.311 0 0.342 0 0.264 0 0.482-0.187 0.56-0.435 0.031-0.078 0.607-1.866 0.607-3.81 0-2.022-0.809-3.313-1.586-4.572-0.84-1.338-1.711-2.737-1.711-5.195 0-1.26 0.451-2.193 1.337-2.799 1.291 2.411 3.717 2.986 4.728 3.126 0.202 0.607 0.669 1.633 1.509 1.96 0.373 0.156 0.793 0.156 1.166 0 0.187 0.109 0.42 0.187 0.638 0.156 0.653-0.015 1.322-0.467 1.788-1.26 0.047-0.078 0.093-0.155 0.156-0.233 0.513-0.762 1.555-2.348-0.762-4.572-1.104-4.744-3.079-7.076-3.826-7.978l-0.093-0.14c-0.358-0.42-0.731-0.84-1.12-1.244l0.498-3.422c0.031-0.202-0.047-0.404-0.187-0.544-0.124-0.078-0.28-0.14-0.436-0.14zM19.415 0.124c-0.031 0-0.047 0.016-0.078 0.016-0.482 0.062-0.809 0.451-1.151 0.84-0.14 0.156-0.404 0.451-0.544 0.529-0.124-0.031-0.389-0.233-0.56-0.342-0.482-0.327-1.089-0.747-1.773-0.591-0.575 0.109-0.918 0.669-1.244 1.182-0.124 0.202-0.373 0.575-0.513 0.684-0.14-0.047-0.42-0.218-0.607-0.327-0.529-0.311-1.089-0.638-1.649-0.451-0.591 0.202-1.026 0.995-1.198 1.571-0.062 0.187-0.156 0.513-0.233 0.638-0.156-0.016-0.575-0.14-0.762-0.218-0.56-0.249-1.338-0.311-1.913-0.031-0.607 0.311-0.747 1.306-0.731 1.897 0 0.171 0 0.451-0.016 0.591s-0.062 0.171-0.109 0.202c-0.078 0.062-0.327 0.062-0.529 0.093-0.529 0.062-1.244-0.047-1.617 0.42-0.389 0.529-0.342 1.151-0.202 1.742 0.078 0.202 0.187 0.622 0.171 0.7-0.078 0.093-0.171 0.156-0.404 0.249-0.591 0.202-1.306 0.451-1.54 1.166-0.14 0.482-0.062 0.778 0.233 1.244 0.078 0.124 0.218 0.358 0.28 0.482-0.093 0.078-0.296 0.202-0.42 0.264-0.42 0.233-0.98 0.56-1.104 1.229-0.062 0.482 0.342 0.995 0.622 1.4 0.156 0.202 0.28 0.498 0.358 0.622-0.078 0.078-0.529 0.513-0.622 0.575-0.373 0.28-0.886 0.669-0.886 1.306 0 0.435 0.467 1.509 0.793 1.913 0.124 0.155-0.047 0.42-0.156 0.576-0.047 0.124-0.404 0.513-0.607 0.731-0.249 0.295-0.762 1.011-0.7 1.618 0.078 0.622 0.669 1.291 1.135 1.664 0.311 0.233 0.311 0.389 0.404 0.467 0.031 0.093 0.109 0.171 0.171 0.233 0.062 0.047 0.902 0.855 3.841 0.84-1.322-1.944-1.944-6.143-1.944-8.367 0-9.612 7.481-14.355 15.413-14.884 0.202-0.513 0.544-1.306 1.244-2.115-0.513-0.342-0.746-0.373-0.855-0.358zM25.496 1.182l-0.358 2.551c0.109 0.109 0.218 0.249 0.327 0.373 0.202-0.607 0.498-1.26 0.995-1.804 0.155-0.156 0.218-0.389 0.155-0.607s-0.249-0.373-0.467-0.435c-0.202-0.047-0.404-0.078-0.606-0.078h-0.047zM23.832 9.331c0.513 0 0.933 0.42 0.933 0.933s-0.42 0.933-0.933 0.933c-0.513 0-0.933-0.42-0.933-0.933s0.42-0.933 0.933-0.933z">
                    </path>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="/lottery" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Lottery"></use>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="/bingolist" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Bingo2"></use>
                </svg>
            </FoldNavLink>

        </div>

        <div className="fold-line">
            <FoldNavLink href="#/vip" keepScrollPosition={true} className="fold-navlink-item" target="_self">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_VipClub"></use>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="/affiliate" keepScrollPosition={true} className="fold-navlink-item" target="_self">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Affiliate"></use>
                </svg>
            </FoldNavLink>

            <FoldNavLink href="https://forum.bc.game/" keepScrollPosition={true} className="fold-navlink-item" target="_blank">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Forum"></use>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="https://blog.BC.GAME/" keepScrollPosition={true} className="fold-navlink-item" target="_blank">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Blog"></use>
                </svg>
            </FoldNavLink>
            <FoldNavLink href="https://betting.BC.GAME/" keepScrollPosition={true} className="fold-navlink-item" target="_blank">
                <svg className="ig2udpo" width="18" height="18" viewBox="0 0 1024 1024" fill="none">
                    <path
                        d="M473.297 744.974c16.507 0 29.89 13.383 29.89 29.89v95.825c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-95.825c0-16.507 13.383-29.89 29.89-29.89h56.264zM314.17 672.888c16.507 0 29.89 13.383 29.89 29.89v167.919c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-167.919c0-16.507 13.383-29.89 29.89-29.89h56.264zM498.198 123.413c160.864 0 291.287 130.426 291.287 291.287-0.085 69.375-24.42 133.070-64.931 183.087l42.368 42.368-0.959 0.93 0.366-0.308c9.144-7.258 22.477-6.642 30.948 1.801l147.504 147.504c9.088 9.088 9.088 23.86 0 32.969l-37.472 37.472c-9.088 9.088-23.86 9.088-32.969 0l-147.504-147.504c-8.44-8.44-9.059-21.773-1.801-30.948l-0.366 0.366-42.284-42.284c-50.189 41.076-114.306 65.748-184.185 65.829-160.864 0-291.287-130.426-291.287-291.287s130.426-291.287 291.287-291.287zM498.198 193.152c-122.348 0-221.549 99.2-221.549 221.549s99.2 221.549 221.549 221.549c122.348 0 221.549-99.2 221.549-221.549-0.109-122.321-99.224-221.435-221.549-221.549zM502.747 294.847c100.282 0 181.547 74.2 181.547 109.937s-81.265 109.851-181.547 109.851c-100.282 0-181.547-75.541-181.547-109.851s81.265-109.937 181.547-109.937zM502.661 323.773c-44.724 0-80.984 36.233-80.984 80.924 0 44.242 35.542 80.201 79.649 80.912l1.443 0.012c44.229 0 80.159-35.464 80.875-79.485l0.012-1.337v-0.102c0-44.693-36.261-80.924-80.984-80.924zM507.263 352.399c-2.745 4.323-4.384 9.432-4.507 14.903l-0.009 0.53-0.012 0.188 0.006 0.478c0.269 15.799 13.176 28.525 29.045 28.525 7.954 0 15.168-3.199 20.423-8.386l0.304-0.304-0.111-0.376c1.746 5.112 2.749 10.584 2.854 16.274l0.011 0.741-0.009 0.865c-0.464 28.573-23.789 51.597-52.497 51.597-28.999 0-52.506-23.491-52.506-52.468 0-28.688 23.037-51.995 51.639-52.459l0.866-0.009h4.439l0.077-0.111zM102.292 524.306h56.264c16.507 0 29.89 13.383 29.89 29.89v316.494c0 16.507-13.383 29.89-29.89 29.89h-56.264c-16.507 0-29.89-13.383-29.89-29.89v-316.494c0-16.507 13.383-29.89 29.89-29.89z">
                    </path>
                </svg>
            </FoldNavLink>

        </div>

        <div className="fold-line">
            <FoldNavLink href="/sponsorship/afa" keepScrollPosition={true} className="fold-navlink-item">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Sponsorship"></use>
                </svg>
            </FoldNavLink>
            <button className="fold-navlink-item support">
                <svg className="s1ff97qc icon">
                    <use xlinkHref="/images/symbol-defs.ef6a79c4.svg#icon_Support"></use>
                </svg></button>
        </div>
        {/* ... other components ... */}
    </div>
);

export default FoldNav;
