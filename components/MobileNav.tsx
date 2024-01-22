import React from 'react';
// import '../styles/index.bfcb7d91.css'

interface NavLinkProps {
  href: string;
  label: string;
  target?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, target }) => (
  <a href={href} keep-scroll-position="true" className="s-nav-item" target={target || '_self'}>
    <div className="s-nav-item-left">
      <svg className="s1ff97qc icon">
        {/* Assuming the SVG content is dynamic based on the actual icon */}
        <use xlinkHref={`/images/symbol-defs.ef6a79c4.svg#icon_${label.replace(/\s+/g, '')}`}></use>
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
  title: string;
  links: NavLinkProps[];
  hasSubNav?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, links, hasSubNav }) => (
  <div className="s-nav-wrap-item">
    <div className="s-nav-title"><span>{title}</span></div>
    {hasSubNav ? <SubNav links={links} /> : links.map((link, index) => <NavLink key={index} {...link} />)}
  </div>
);

interface Props {
  open: boolean;
}

const MobileNav: React.FC<Props> = ({ open }) => {
  // Define the navigation data
  const navigationData = {
    games: [
      { href: '/gamelist/brand', label: 'BC Originals' },
      { href: '/gamelist/slots', label: 'Slots' },
      // Add other game links
    ],
    vipClub: { href: '#/vip', label: 'VIP Club' },
    exclusive: [
      { href: '/exclusive/daily-contest', label: 'Daily Contest' },
      { href: '/promotion', label: 'Promotions' },
      // Add other exclusive links
    ],
    affiliate: { href: '/affiliate', label: 'Affiliate' },
    // Add other top-level navigation items
  };

  return (
    <div className="w1o1zyin" style={open ? { display: 'block' } : { display: 'none' }}>
      {/* Render your components based on the structure */}
      {/* You can use the NavLink, SubNav, and NavItem components as needed */}
      <div className="sa-motion-wrap" style={{ opacity: 1, transform: 'translateY(0%) translateZ(0px)' }}>
        <div className="motion-inner">
          {/* ... other components ... */}
          <NavItem title="Games" links={navigationData.games} />
          <NavItem title="VIP Club" links={[navigationData.vipClub]} />
          <NavItem title="Exclusive" links={navigationData.exclusive} hasSubNav />
          <NavItem title="Affiliate" links={[navigationData.affiliate]} />
          {/* ... render other top-level navigation items ... */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
