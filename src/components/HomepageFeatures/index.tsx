import type {ReactNode} from 'react';
import {useCallback, useId, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type CategoryCard = {
  title: string;
  description: string;
  to: string;
  icon: ReactNode;
};

function CardChevronIcon(): ReactNode {
  return (
    <svg className={styles.cardIconSvg} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
      />
    </svg>
  );
}

const categoryCards: CategoryCard[] = [
  {
    title: 'Sản phẩm dịch vụ',
    description:
      'Kênh quảng bá và tài liệu giới thiệu dịch vụ dành cho bất động sản của bạn.',
    to: '/docs/intro',
    icon: <CardChevronIcon />,
  },
  {
    title: 'Thanh toán — Nạp tiền',
    description:
      'Hướng dẫn về thanh toán, hóa đơn và tra cứu thông tin giao dịch (khi áp dụng).',
    to: '/docs/intro',
    icon: <CardChevronIcon />,
  },
  {
    title: 'Hướng dẫn và quy định đăng tin',
    description: 'Cách đăng tin để thu hút khách hàng tiềm năng và tuân thủ quy định.',
    to: '/docs/quy-dinh-dang-tin-bat-dong-san',
    icon: <CardChevronIcon />,
  },
  {
    title: 'Tài khoản người dùng',
    description: 'Khởi tạo loại tài khoản phù hợp và quản lý tài khoản hiệu quả.',
    to: '/docs/intro',
    icon: <CardChevronIcon />,
  },
  {
    title: 'Chương trình khuyến mãi',
    description: 'Cập nhật các chương trình ưu đãi dành cho khách hàng qua blog.',
    to: '/blog',
    icon: <CardChevronIcon />,
  },
  {
    title: 'Quy định và chính sách',
    description: 'Các quy định và chính sách khi sử dụng dịch vụ và đăng tin.',
    to: '/docs/quy-dinh-dang-tin-bat-dong-san',
    icon: <CardChevronIcon />,
  },
];

type FaqEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

const faqEntries: FaqEntry[] = [
  {
    id: 'vip-voucher',
    question: 'Gói voucher Tin VIP là gì?',
    answer: (
      <>
        Gói voucher Tin VIP cung cấp mã giảm giá khi bạn sử dụng dịch vụ đăng tin VIP, giúp tin nổi bật và tiếp cận nhiều người xem hơn. Điều kiện và thời hạn từng đợt khuyến mãi được thông báo riêng trên hệ thống.
      </>
    ),
  },
  {
    id: 'multi-vip-month',
    question:
      'Tôi có thể mua nhiều gói voucher Tin VIP trong cùng một tháng không?',
    answer: (
      <>
        Tùy chính sách từng thời điểm: thường bạn có thể mua và sử dụng nhiều gói theo quy định hiển thị tại mục thanh toán. Nếu có giới hạn số gói hoặc hạn mức, hệ thống sẽ thông báo khi bạn thao tác mua hoặc áp dụng voucher.
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
        <Link to="/docs/intro">Giới thiệu</Link> và các mục hướng dẫn trong phần Tutorial, hoặc dùng ô tìm kiếm (Ctrl+K) để mở nhanh nội dung cần đọc.
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

function SearchPrompt(): ReactNode {
  const history = useHistory();

  const handleClick = useCallback(() => {
    const searchInput = document.querySelector(
      'input.navbar__search-input',
    ) as HTMLElement | null;
    const docSearchBtn = document.querySelector(
      '.DocSearch-Button',
    ) as HTMLElement | null;
    const el = searchInput || docSearchBtn;
    if (el) {
      el.focus();
      el.click();
    } else {
      history.push('/search');
    }
  }, [history]);

  return (
    <div className={styles.searchWrap}>
      <button
        type="button"
        className={styles.searchFakeInput}
        onClick={handleClick}
        aria-label="Mở tìm kiếm">
        <span className={styles.searchPlaceholder}>
          Mời bạn nhập câu hỏi hoặc từ khóa
        </span>
        <kbd className={styles.kbdHint} title="Phím tắt">
          Ctrl
          <span className={styles.kbdPlus}>+</span>K
        </kbd>
      </button>
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
          <SearchPrompt />
        </div>
      </section>

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
            <Link href="mailto:support@example.com" className={styles.contactLink}>
              Liên hệ
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
