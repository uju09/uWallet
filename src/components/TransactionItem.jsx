import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const TransactionItem = ({
  type = 'sent',
  title = 'Sent to External',
  address = '8x2j...9Kmz',
  amount = '-12.5 SOL',
  time = '2 mins ago',
}) => {
  const isSent = type === 'sent';
  const Icon = isSent ? ArrowUpRight : ArrowDownLeft;

  return (
    <div className="flex items-center justify-between p-2 group cursor-pointer">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full bg-[#1A2920] flex items-center justify-center group-hover:bg-[#D4FF00] group-hover:text-black transition-colors ${isSent ? 'text-[#8FA396]' : 'text-[#D4FF00]'
            }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">{title}</h4>
          <p className="text-[10px] text-[#8FA396] font-mono">
            {isSent ? 'To' : 'From'}: {address}
          </p>
        </div>
      </div>
      <div className="text-right">
        <div className={`font-bold text-sm ${isSent ? 'text-white' : 'text-[#D4FF00]'}`}>{amount}</div>
        <span className="text-[10px] text-[#8FA396]">{time}</span>
      </div>
    </div>
  );
};

const TransactionList = () => {
  return (
    <div className="max-w-sm mx-auto space-y-3">
      <TransactionItem
        type="sent"
        title="Sent to External"
        address="8x2j...9Kmz"
        amount="-12.5 SOL"
        time="2 mins ago"
      />
      <TransactionItem
        type="received"
        title="Received"
        address="Coinbase"
        amount="+500 USDC"
        time="1 hr ago"
      />
    </div>
  );
};

export { TransactionItem, TransactionList };
export default TransactionList;
