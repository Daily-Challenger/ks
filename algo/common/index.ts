interface PriceFormatterOptions {
  locale?: string;
  roundUnit?: number; // 반올림 단위 (1000, 10000 등)
  suffix?: string; // 접미사 ("원", "KRW" 등)
  prefix?: string; // 접두사 ("약 " 등)
}

function createPriceFormatter(options: PriceFormatterOptions = {}) {
  const {
    locale = 'ko-KR',
    roundUnit = 1000,
    suffix = '원',
    prefix = '',
  } = options;

  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  });

  return (amount: number): string => {
    const rounded = Math.round(amount / roundUnit) * roundUnit;
    return `${prefix}${formatter.format(rounded)}${suffix}`;
  };
}

// 사용 예시
const formatThousand = createPriceFormatter();
console.log(formatThousand(12345)); // "12,000원"

const formatApprox = createPriceFormatter({ prefix: '약 ' });
console.log(formatApprox(12345)); // "약 12,000원"

const formatTenThousand = createPriceFormatter({ roundUnit: 10000 });
console.log(formatTenThousand(12345)); // "10,000원"

const formatKRW = createPriceFormatter({ suffix: ' KRW' });
console.log(formatKRW(12345)); // "12,000 KRW"

// 함수를 생성하는 함수
function createPriceFormatter2(locale: string = 'ko-KR') {
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  });

  // 포맷팅 함수를 return
  return (amount: number): string => {
    const rounded = Math.round(amount / 1000) * 1000;
    return `${formatter.format(rounded)}원`;
  };
}

// 사용
const formatPrice = createPriceFormatter2('ko-KR');
console.log(formatPrice(12345)); // "12,000원"
console.log(formatPrice(5678)); // "6,000원"

// 다른 locale으로도 생성 가능
const formatPriceUS = createPriceFormatter2('en-US');
console.log(formatPriceUS(12345)); // "12,000원"
