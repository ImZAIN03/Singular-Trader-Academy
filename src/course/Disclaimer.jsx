/* eslint-disable no-unused-vars */
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-10">Disclaimer</h1>
      <p className="text-black mb-4">
        Please be aware that trading stocks and cryptocurrencies carries a high level of risk and may not be suitable<br/>
        for all investors. As an educational company, we provide information and resources solely for educational and<br/> 
        informational purposes. We are not financial advisors, and the information provided should not be treated as <br/>
        financial advice. We will not be held liable for any losses or damages resulting from investment decisions <br/>
        made by our clients. It is important to conduct your own research and consult with a financial advisor before <br/>
        making any investment decisions. Please also note that if you do not agree with any of the terms outlined in <br/>
        our Terms of Use, please do not use our website, services, and information. By using our website, you agree to <br/>
        our terms. Also, remember that opinions and descriptions of past results posted in our course are not typical <br/>
        and should not be taken as an indicator of future results. These opinions are not to be considered as a <br/>
        representation or guarantee of achieving similar results. Our traders experience is not typical and achieving <br/>
        success as a trader requires a lot of work, dedication and time. Your own results may vary significantly and we <br/>
        do not have access to our customers trading accounts.
      </p>
      <p className="text-black mb-8">
        Research conducted by professors at the University of California found that only 9.81% of daily transactions on <br/>
        the Taiwan Stock Exchange between 1992 and 2006 were profitable, and those traders constitute less than 3% <br/> 
        of all daily traders.
      </p>
    </div>
  );
};

export default Disclaimer;
