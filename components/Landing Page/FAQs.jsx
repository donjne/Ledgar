import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import chevronDown from '@iconify-icons/bx/bxs-chevron-down';

const FAQs = () => {
  const [showAnswers, setShowAnswers] = useState(Array(5).fill(false));

  useEffect(() => {
    const liElements = document.querySelectorAll('.faq-text li');
    for (let i = 0; i < liElements.length; i++) {
      liElements[i].addEventListener('click', (e) => {
        let clickedLi;
        if (e.target.classList.contains('question-arrow')) {
          clickedLi = e.target.parentElement;
        } else {
          clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle('showAnswer');
      });
    }
  }, []);

  const handleClick = (index) => {
    setShowAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = !newAnswers[index];
      return newAnswers;
    });
  };

  return (
    <div
      className="accordion"
      style={{
        display: 'flex',
        maxWidth: '1010px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
        borderRadius: '25px',
        padding: '45px 90px 45px 60px',
        // marginLeft: '60px',
      }}
    >
      <div
        className="image-box"
        style={{
          height: '360px',
          width: '300px',
        }}
      >
        <img src="accordion.png" alt="Accordion Image" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
      </div>
      <div className="accordion-text" style={{ width: '60%' }}>
        <div
          className="title"
          style={{
            fontSize: '35px',
            fontWeight: '600',
            color: '#010F58',
            fontFamily: 'Fira Sans, sans-serif',
          }}
        >
          Frequently Asked Questions
        </div>
        <ul
          className="faq-text"
          style={{
            marginTop: '25px',
            height: '263px',
            overflowY: 'auto',
          }}
        >
          <li>
            <div className="question-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="question mb-3" style={{ fontSize: '18px', fontWeight: '500', color: '#595959', transition: 'all 0.3s ease' }}>
              How do I create a budget?
              </span>
              <Icon
                icon={chevronDown}
                className={`arrow ${showAnswers[0] ? 'showAnswer' : ''}`}
                style={{ fontSize: '20px', color: '#595959', transition: 'all 0.3s ease' }}
                onClick={() => handleClick(0)}
              />
            </div>
            <p
              style={{
                width: '92%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#595959',
                display: showAnswers[0] ? 'block' : 'none',
              }}
            >
              To create a budget, sign in to your account and navigate to the Active Budget section. Click on the plus icon and enter the necessary details such as budget name, duration, and categories. Save your budget, and you can start tracking your expenses.
            </p>
            <span className="line" style={{ display: 'block', height: '2px', width: '100%', margin: '10px 0', background: 'rgba(0, 0, 0, 0.1)' }}></span>
          </li>
          <li>
            <div className="question-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="question mb-3" style={{ fontSize: '18px', fontWeight: '500', color: '#595959', transition: 'all 0.3s ease' }}>
              Can I collaborate on budgets with others?
              </span>
              <Icon
                icon={chevronDown}
                className={`arrow ${showAnswers[1] ? 'showAnswer' : ''}`}
                style={{ fontSize: '20px', color: '#595959', transition: 'all 0.3s ease' }}
                onClick={() => handleClick(1)}
              />
            </div>
            <p
              style={{
                width: '92%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#595959',
                display: showAnswers[1] ? 'block' : 'none',
              }}
            >
              Yes, you can collaborate on budgets with others. Invite your friends or family members to join your budget by sharing the budget link or sending them an invitation through their email. Once they accept the invitation, they can contribute and track the budget together with you.
            </p>
            <span className="line" style={{ display: 'block', height: '2px', width: '100%', margin: '10px 0', background: 'rgba(0, 0, 0, 0.1)' }}></span>
          </li>
          <li>
            <div className="question-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="question mb-3" style={{ fontSize: '18px', fontWeight: '500', color: '#595959', transition: 'all 0.3s ease' }}>
              Is my financial data secure?
              </span>
              <Icon
                icon={chevronDown}
                className={`arrow ${showAnswers[2] ? 'showAnswer' : ''}`}
                style={{ fontSize: '20px', color: '#595959', transition: 'all 0.3s ease' }}
                onClick={() => handleClick(2)}
              />
            </div>
            <p
              style={{
                width: '92%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#595959',
                display: showAnswers[2] ? 'block' : 'none',
              }}
            >
              Yes, we take the security and privacy of your financial data seriously. We use advanced encryption techniques to protect your information, and we adhere to strict privacy policies. Your data is stored securely and will not be shared with any third parties without your consent.
            </p>
            <span className="line" style={{ display: 'block', height: '2px', width: '100%', margin: '10px 0', background: 'rgba(0, 0, 0, 0.1)' }}></span>
          </li>
          <li>
            <div className="question-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="question mb-3" style={{ fontSize: '18px', fontWeight: '500', color: '#595959', transition: 'all 0.3s ease' }}>
              Can I set savings goals?
              </span>
              <Icon
                icon={chevronDown}
                className={`arrow ${showAnswers[3] ? 'showAnswer' : ''}`}
                style={{ fontSize: '20px', color: '#595959', transition: 'all 0.3s ease' }}
                onClick={() => handleClick(3)}
              />
            </div>
            <p
              style={{
                width: '92%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#595959',
                display: showAnswers[3] ? 'block' : 'none',
              }}
            >
              Absolutely! You can set savings goals in the Savings section. Specify the amount you want to save and the target date. Our platform will help you track your progress and provide suggestions on how to achieve your savings goals.
            </p>
            <span className="line" style={{ display: 'block', height: '2px', width: '100%', margin: '10px 0', background: 'rgba(0, 0, 0, 0.1)' }}></span>
          </li>
          <li>
            <div className="question-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="question mb-3" style={{ fontSize: '18px', fontWeight: '500', color: '#595959', transition: 'all 0.3s ease' }}>
              How can I contact customer support?
              </span>
              <Icon
                icon={chevronDown}
                className={`arrow ${showAnswers[4] ? 'showAnswer' : ''}`}
                style={{ fontSize: '20px', color: '#595959', transition: 'all 0.3s ease' }}
                onClick={() => handleClick(4)}
              />
            </div>
            <p
              style={{
                width: '92%',
                fontSize: '15px',
                fontWeight: '500',
                color: '#595959',
                display: showAnswers[4] ? 'block' : 'none',
              }}
            >
              If you have any questions or need assistance, you can reach out to our customer support team. Send a message to any of our social media handles, and our support team will get back to you as soon as possible.
            </p>
            <span className="line" style={{ display: 'block', height: '2px', width: '100%', margin: '10px 0', background: 'rgba(0, 0, 0, 0.1)' }}></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
