// components/LotteryList.tsx

import React from 'react';

interface Lottery {
  order: number;
  name: string;
  iconSrc: string;
  nextDraw: string;
  amount: number;
}

interface LotteryListProps {
  lotteries: Lottery[];
}

const LotteryList: React.FC<LotteryListProps> = ({ lotteries }) => {
  return (
    <div className="winner-section-top winner-section">
      <div className="winner-top-title winner-title">
        <img src="/modules/lottery/winner-icon-89ad68fd.svg" alt="Winner Icon" />
        <h2 className="winner-title">Top Winning Lotteries</h2>
      </div>
      <div className="winner-top-body">
        <ul className="winner-top-body-ul">
          {lotteries.map((lottery) => (
            <li key={lottery.order} className="winner-top-body-item">
              <div className="item-order">{lottery.order}</div>
              <div className="item-content">
                <div className="lottery-name">
                  <img className="area-icon" src={lottery.iconSrc} alt={`${lottery.name} Icon`} />
                  <label className="lottery-name-title ellipsis">{lottery.name}</label>
                </div>
                <div className="lottery-date ellipsis">Next draw:
                  <span className="bet-date-content"> {lottery.nextDraw}</span>
                </div>
                <div className="lottery-amount">
                  <label>$</label>{lottery.amount}
                </div>
              </div>
              <div className="item-btn">
                <button className="ui-button button-normal s-conic item-name item-btn-name">
                  <div className="button-inner">Bet Now</div>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LotteryList;
