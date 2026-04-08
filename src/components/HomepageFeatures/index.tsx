import type {ReactNode} from 'react';
import {useId, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type CategoryCard = {
  title: string;
  description: string;
  to: string;
  icon: ReactNode;
};

function BuildingStoreIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M3 21h18M4 21V8l8-4 8 4v13M9 11h6M9 15h6M10 21v-3h4v3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 7a2 2 0 0 1 2-2h11a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm0 3h16M16.5 14.5h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileDescriptionIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserCircleIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-4.5 6.8a6 6 0 0 1 9 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M20 10 12 18a2 2 0 0 1-2.83 0L4 12.83V4h8.83L20 11.17A2 2 0 0 1 20 10Zm-11-4h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 3 5 6v6c0 4.97 3 7.93 7 9 4-1.07 7-4.03 7-9V6l-7-3Zm-3 9 2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const categoryCards: CategoryCard[] = [
  {
    title: 'Sản phẩm dịch vụ',
    description:
      'Kênh quảng bá và tài liệu giới thiệu dịch vụ dành cho bất động sản của bạn.',
    to: '/docs/category/sản-phẩm-dịch-vụ',
    icon: <BuildingStoreIcon />,
  },
  {
    title: 'Thanh toán — Nạp tiền',
    description:
      'Hướng dẫn về thanh toán, hóa đơn và tra cứu thông tin giao dịch (khi áp dụng).',
    to: '/docs/category/thanh-toán---nạp-tiền',
    icon: <WalletIcon />,
  },
  {
    title: 'Hướng dẫn và quy định đăng tin',
    description: 'Cách đăng tin để thu hút khách hàng tiềm năng và tuân thủ quy định.',
    to: '/docs/category/hướng-dẫn-và-quy-định-đăng-tin',
    icon: <FileDescriptionIcon />,
  },
  {
    title: 'Tài khoản người dùng',
    description: 'Khởi tạo loại tài khoản phù hợp và quản lý tài khoản hiệu quả.',
    to: '/docs/category/tài-khoản-người-dùng',
    icon: <UserCircleIcon />,
  },
  {
    title: 'Chương trình khuyến mãi',
    description: 'Cập nhật các chương trình ưu đãi dành cho khách hàng qua blog.',
    to: '/docs/category/chương-trình-khuyến-mãi',
    icon: <TagIcon />,
  },
  {
    title: 'Quy định và chính sách',
    description: 'Các quy định và chính sách khi sử dụng dịch vụ và đăng tin.',
    to: '/docs/category/quy-định-và-chính-sách',
    icon: <ShieldCheckIcon />,
  },
];

type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

const faqEntries: FaqEntry[] = [
  {
    id: 'sell-house-fast',
    question: 'Cách bán nhà nhanh nhất là gì?',
    answer: (
      <>
        Để bán nhà nhanh, điều quan trọng là phải hiểu rõ thị trường bất động sản tại khu vực của bạn. Mỗi khu vực sẽ có nhu cầu và mức giá khác nhau. Làm việc với một môi giới bất động sản uy tín sẽ giúp bạn đánh giá đúng thị trường và lựa chọn phương án bán phù hợp để giao dịch diễn ra nhanh chóng.
      </>
    ),
  },
  {
    id: 'house-pricing',
    question: 'Làm sao để định giá ngôi nhà của tôi?',
    answer: (
      <>
        Bạn có thể ước tính giá trị ngôi nhà thông qua các nền tảng bất động sản trực tuyến hoặc nhờ đến chuyên gia trong ngành. Ngoài ra, việc theo dõi giá nhà theo thời gian và cập nhật thông tin thị trường sẽ giúp bạn có cái nhìn chính xác hơn về giá trị hiện tại của tài sản.
      </>
    ),
  },
  {
    id: 'best-selling-channel',
    question: 'Nên bán nhà thông qua ai là tốt nhất?',
    answer: (
      <>
        Các môi giới bất động sản tại địa phương, đặc biệt là những người am hiểu khu vực bạn đang sinh sống, sẽ là lựa chọn đáng tin cậy. Họ có kinh nghiệm, mạng lưới khách hàng và kỹ năng thương lượng tốt. Bên cạnh đó, bạn cũng có thể cân nhắc các hình thức khác như bán trực tiếp cho người mua hoặc tự đăng bán nếu có kinh nghiệm.
      </>
    ),
  },
  {
    id: 'key-value-factor',
    question: 'Yếu tố quan trọng nhất quyết định giá trị ngôi nhà là gì?',
    answer: (
      <>
        Giá trị của một ngôi nhà phụ thuộc lớn vào các giao dịch mua bán của những bất động sản tương tự trong cùng khu vực (thường gọi là “so sánh thị trường”). Đây là cơ sở quan trọng để xác định mức giá phù hợp. Một môi giới chuyên nghiệp sẽ giúp bạn phân tích dữ liệu này để đưa ra mức giá hợp lý và cạnh tranh.
      </>
    ),
  },
  {
    id: 'listing-rules',
    question: 'Quy định đăng tin bất động sản được áp dụng như thế nào?',
    answer: (
      <>
        Toàn bộ tin đăng cần tuân thủ quy định về nội dung, hình ảnh, phân loại và “một tin — một BĐS”. Xem chi tiết tại{' '}
        <Link to="/docs/quy-dinh-dang-tin-bat-dong-san">Quy định đăng tin</Link>.
      </>
    ),
  },
  {
    id: 'get-started',
    question: 'Làm sao để bắt đầu với tài liệu trên site?',
    answer: (
      <>
        Bạn có thể bắt đầu từ trang{' '}
        <Link to="/">Giới thiệu</Link> và các mục hướng dẫn trong phần Tutorial, hoặc dùng ô tìm kiếm (Ctrl+K) để mở nhanh nội dung cần đọc.
      </>
    ),
  },
  {
    id: 'blog-updates',
    question: 'Blog cập nhật những nội dung gì?',
    answer: (
      <>
        Blog tổng hợp bài viết, thông báo và gợi ý sử dụng dịch vụ. Xem tại{' '}
        <Link to="/blog">trang Blog</Link>.
      </>
    ),
  },
];

function FaqAccordion(): ReactNode {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.faqAccordion}>
      {faqEntries.map((entry) => {
        const expanded = openId === entry.id;
        const panelId = `${baseId}-${entry.id}-panel`;
        const headerId = `${baseId}-${entry.id}-header`;
        return (
          <div key={entry.id} className={styles.faqItem}>
            <button
              type="button"
              id={headerId}
              className={styles.faqTrigger}
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => toggle(entry.id)}>
              <span className={styles.faqIcon} aria-hidden>
                {expanded ? '−' : '+'}
              </span>
              <span className={styles.faqQuestion}>{entry.question}</span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!expanded}
              className={styles.faqAnswer}>
              {entry.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CategoryCardLink({title, description, to, icon}: CategoryCard): ReactNode {
  return (
    <Link to={to} className={styles.categoryCard}>
      <div className={styles.cardIcon} aria-hidden>
        {icon}
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className={styles.helpHome}>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.cardGrid}>
            {categoryCards.map((card) => (
              <CategoryCardLink key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.section, styles.faqSection)}>
        <div className="container">
          <Heading as="h2" className={styles.faqSectionTitle}>
            Câu hỏi thường gặp
          </Heading>
          <FaqAccordion />
          <p className={styles.contactLine}>
            <Link href="mailto:info@daidongcat.vn" className={styles.contactLink}>
              Liên hệ
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
