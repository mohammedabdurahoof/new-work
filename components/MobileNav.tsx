import React from 'react';
// import '../styles/index.bfcb7d91.css'

interface NavLinkProps {
  href: string;
  label: string;
  target?: string;
  icon: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, target, icon }) => (
  <a href={href} keep-scroll-position="true" className="s-nav-item" target={target || '_self'}>
    <div className="s-nav-item-left">
      <svg className="s1ff97qc icon">
        {/* Assuming the SVG content is dynamic based on the actual icon */}
        <use xlinkHref={`/images/symbol-defs.ef6a79c4.svg#icon_${icon}`}></use>
      </svg>
    </div>
    <div className="s-nav-item-right"><span>{label}</span></div>
  </a>
);

interface SubNavProps {
  links: NavLinkProps[];
}

const SubNav: React.FC<SubNavProps> = ({ links }) => (
  <div className="s-sub-navs-wrap">
    {links.map((link, index) => (
      <NavLink key={index} {...link} />
    ))}
  </div>
);

interface NavItemProps {
  title?: string;
  links: NavLinkProps[];
  hasSubNav?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, links, hasSubNav }) => (
  <div className="s-nav-wrap-item">
    {title && <div className="s-nav-title"><span>{title}</span></div>}
    {hasSubNav ? <SubNav links={links} /> : links.map((link, index) => <NavLink key={index} {...link} />)}
  </div>
);

interface Props {
  open: boolean;
}

const MobileNav: React.FC<Props> = ({ open }) => {
  // Define the navigation data
  const navigationData = {
    primary: [
      { href: '#/vip', label: 'VIP Club',icon:'VipClub' },
      { href: '/casino?tab=brand', label: 'BC Exclusive',icon:'Exclusive' },
      { href: '/affiliate', label: 'Affiliate',icon:'Affiliate' },
      { href: 'https://forum.bc.game/', label: 'Forum',icon:'Forum' },
      { href: '/help', label: 'Provably Fair',icon:'ProvablyFair' },
      { href: 'https://blog.BC.GAME/', label: 'Blog',icon:'Blog' },
      { href: 'https://betting.BC.GAME/', label: 'Sport Betting Insights',icon:'Exclusive' },
      { href: '/', label: 'Sponsorships',icon:'Sponsorship' },
    ],
    support: { href: '#', label: 'Live Support', icon: 'Support' },
    // Add other top-level navigation items
  };

  return (
    <div className="w1o1zyin" style={open ? { display: 'block' } : { display: 'none' }}>
      {/* Render your components based on the structure */}
      {/* You can use the NavLink, SubNav, and NavItem components as needed */}
      <div className="sa-motion-wrap" style={{ opacity: 1, transform: 'translateY(0%) translateZ(0px)' }}>
        <div className="motion-inner">
          <div className="motion-item" style={{ opacity: 1, transform: 'translateY(0%) translateZ(0px)' }}>
            <div className="m18t3jnw">
              <div className="s-scroll-wrap">
                <div className="s-motion-item" style={{ opacity: 1, transform: 'translateY(0%) translateZ(0px)' }}>
                  <div className="ui-scrollview">
                    {/* ... other components ... */}
                    <NavItem links={navigationData.primary} />
                    <NavItem title="Support" links={[navigationData.support]} />
                    {/* ... render other top-level navigation items ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
