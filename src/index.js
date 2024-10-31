import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

try {
  root.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
  );
} catch (error) {
  console.error("Không tải được App.js:", error);
  root.render(
      <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1>Vipassana Việt Nam</h1>
          <p>Tổ chức các khóa thiền Vipassana do thiền sư S.N. Goenka giảng dạy</p>
          <p>theo truyền thống của Ngài Sayagyi U Ba Khin.</p>
          <p><a href="https://www.dhamma.org/vi/schedules/noncenter/vn" target="_blank"><strong>Lịch các khóa thiền:</strong></a></p>
          <p><a href="https://www.dhamma.org/vi/schedules/noncenter/vn" target="_blank">https://www.dhamma.org/vi/schedules/noncenter/vn</a></p>
          <p>(Đây là trang web dự phòng khi tải trang bị lỗi!)</p>
      </div>
  );
}

reportWebVitals();
