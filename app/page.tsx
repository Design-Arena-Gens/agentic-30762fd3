"use client";

import { FaChartLine, FaNewspaper, FaUsers, FaDollarSign, FaGlobe, FaClock, FaCheckCircle, FaBook, FaLightbulb } from 'react-icons/fa';
import { MdTrendingUp, MdCompare } from 'react-icons/md';

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <header className="glass-effect p-8 mb-12 animate-fade-in">
          <div className="text-center">
            <h1 className="text-5xl font-black mb-4 gradient-text">
              DesignArena
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              بحث أكاديمي: التسويق الرقمي مقابل التسويق التقليدي
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              دراسة مقارنة شاملة من مصادر أكاديمية موثوقة حول الفروقات الجوهرية بين التسويق الرقمي والتسويق التقليدي، مع أمثلة عملية ودراسات حالة من شركات عالمية
            </p>
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <span className="academic-badge">🎓 مصادر أكاديمية موثوقة</span>
              <span className="academic-badge">📊 دراسات حالة عملية</span>
              <span className="academic-badge">📈 تحليل مقارن شامل</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="section-card mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaBook className="text-primary-600" />
            محتويات البحث
          </h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#introduction" className="text-primary-600 hover:text-primary-800 transition">1. المقدمة</a></li>
            <li><a href="#definitions" className="text-primary-600 hover:text-primary-800 transition">2. التعريفات الأكاديمية</a></li>
            <li><a href="#comparison" className="text-primary-600 hover:text-primary-800 transition">3. المقارنة الشاملة</a></li>
            <li><a href="#roi" className="text-primary-600 hover:text-primary-800 transition">4. العائد على الاستثمار (ROI)</a></li>
            <li><a href="#digital-examples" className="text-primary-600 hover:text-primary-800 transition">5. أمثلة التسويق الرقمي</a></li>
            <li><a href="#traditional-examples" className="text-primary-600 hover:text-primary-800 transition">6. أمثلة التسويق التقليدي</a></li>
            <li><a href="#findings" className="text-primary-600 hover:text-primary-800 transition">7. النتائج والتوصيات</a></li>
            <li><a href="#references" className="text-primary-600 hover:text-primary-800 transition">8. المراجع الأكاديمية</a></li>
          </ul>
        </nav>

        {/* Introduction Section */}
        <section id="introduction" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaLightbulb className="text-yellow-500" />
            1. المقدمة
          </h3>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              شهد عالم التسويق تحولًا جذريًا في العقدين الأخيرين مع ظهور التقنيات الرقمية والإنترنت.
              وقد أدى هذا التحول إلى نشوء نقاش أكاديمي وعملي حول فعالية التسويق الرقمي مقارنة بالتسويق التقليدي.
            </p>
            <p>
              وفقًا لدراسة أكاديمية نُشرت في <strong>International Journal for Multidisciplinary Research</strong>
              (المجلد 6، العدد 4، يوليو-أغسطس 2024) بقلم <strong>Mahdi M. M. Aboali</strong> و
              <strong>Dr. Gajanan Mudholker</strong>، فإن التسويق الرقمي أصبح أكثر تطورًا في العقد الأول من القرن الحادي والعشرين
              كوسيلة فعالة لإنشاء علاقة مع المستهلك تتسم بالعمق والملاءمة.
            </p>
            <p className="citation">
              المصدر: Aboali, M. M. M., & Mudholker, G. (2024). Digital Marketing Vs. Traditional Marketing- General View Comparative.
              International Journal for Multidisciplinary Research, 6(4).
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg mt-6">
              <p className="text-gray-800 font-medium">
                💡 <strong>الهدف من البحث:</strong> يهدف هذا البحث إلى تقديم تحليل أكاديمي شامل للفروقات بين
                التسويق الرقمي والتسويق التقليدي، استنادًا إلى مصادر علمية موثوقة ودراسات حالة عملية من شركات عالمية
                مثل Coca-Cola وNike وAmazon وMcDonald's.
              </p>
            </div>
          </div>
        </section>

        {/* Definitions Section */}
        <section id="definitions" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaBook className="text-primary-600" />
            2. التعريفات الأكاديمية
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="example-card border-r-4 border-primary-500">
              <h4 className="text-2xl font-bold text-primary-700 mb-4">التسويق الرقمي (Digital Marketing)</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                التسويق الرقمي هو استخدام القنوات الرقمية والتقنيات الإلكترونية للترويج للمنتجات والخدمات.
                يشمل استراتيجيات مثل تحسين محركات البحث (SEO)، التسويق عبر وسائل التواصل الاجتماعي،
                التسويق عبر البريد الإلكتروني، والإعلانات المدفوعة عبر الإنترنت.
              </p>
              <div className="bg-primary-50 p-4 rounded">
                <p className="text-sm text-gray-600 font-medium">
                  📚 المصدر الأكاديمي: IGI Global - Digital Marketing vs. Traditional Marketing:
                  Literature Review and Practical Lessons
                </p>
              </div>
            </div>

            <div className="example-card border-r-4 border-accent-500">
              <h4 className="text-2xl font-bold text-accent-700 mb-4">التسويق التقليدي (Traditional Marketing)</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                التسويق التقليدي يشمل التقنيات التي استُخدمت لعقود، بما في ذلك الإعلانات المطبوعة (الصحف والمجلات)،
                الإعلانات المذاعة (التلفزيون والراديو)، البريد المباشر، الإعلانات الخارجية (اللوحات الإعلانية والملصقات)،
                والتسويق وجهًا لوجه.
              </p>
              <div className="bg-accent-50 p-4 rounded">
                <p className="text-sm text-gray-600 font-medium">
                  📚 المصدر الأكاديمي: ResearchGate - Traditional Marketing Versus Digital Marketing
                  Comparative Study
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-3">🔬 ملاحظة أكاديمية مهمة:</h5>
            <p className="text-gray-700 leading-relaxed">
              وفقًا لدراسة جامعة New Hampshire المنشورة في مجلة <strong>Management Science</strong> عام 2024،
              وجدت الباحثة <strong>Scarlett Song</strong> أن الشركات التي تنفق أكثر على الإعلانات التقليدية
              والإعلانات الرقمية المعروضة كان لديها اعتراف وتقييم أكبر لأصول العلامة التجارية في عمليات الاندماج
              والاستحواذ، بينما كان للبحث المدفوع تأثير أكبر على المبيعات الفورية.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <MdCompare className="text-primary-600" />
            3. المقارنة الشاملة بين التسويق الرقمي والتسويق التقليدي
          </h3>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="w-1/4">وجه المقارنة</th>
                  <th className="w-3/8">التسويق الرقمي</th>
                  <th className="w-3/8">التسويق التقليدي</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-gray-800">
                    <FaDollarSign className="inline ml-2 text-green-600" />
                    التكلفة
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">منخفضة التكلفة</strong>
                    <p className="text-sm mt-2">يمكن البدء بميزانيات صغيرة جدًا. مثال: إعلانات Facebook تبدأ من بضعة دولارات.</p>
                    <p className="citation">المصدر: IJFMR Research 2024</p>
                  </td>
                  <td className="bg-red-50">
                    <strong className="text-red-700">عالية التكلفة</strong>
                    <p className="text-sm mt-2">إعلانات التلفزيون تكلف مئات الآلاف من الدولارات. البريد المباشر مكلف بسبب تكاليف البريد.</p>
                    <p className="citation">المصدر: IGI Global Study</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">
                    <FaGlobe className="inline ml-2 text-blue-600" />
                    الوصول الجغرافي
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">وصول عالمي</strong>
                    <p className="text-sm mt-2">يمكن الوصول إلى أي مكان في العالم فورًا دون تكاليف إضافية.</p>
                    <p className="citation">المصدر: Comparative Analysis IJIRMPS</p>
                  </td>
                  <td className="bg-yellow-50">
                    <strong className="text-yellow-700">وصول محلي/إقليمي</strong>
                    <p className="text-sm mt-2">محدود جغرافيًا ويتطلب ميزانية كبيرة للتوسع الجغرافي.</p>
                    <p className="citation">المصدر: IJFMR Research 2024</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">
                    <FaUsers className="inline ml-2 text-purple-600" />
                    التفاعل مع الجمهور
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">تفاعل ثنائي الاتجاه</strong>
                    <p className="text-sm mt-2">تفاعل مباشر وفوري مع العملاء، تعليقات، رسائل، مراجعات.</p>
                    <p className="citation">المصدر: ResearchGate Publication</p>
                  </td>
                  <td className="bg-red-50">
                    <strong className="text-red-700">تفاعل أحادي الاتجاه</strong>
                    <p className="text-sm mt-2">محدود وبطيء. لا توجد طريقة فورية لمعرفة ردود فعل الجمهور.</p>
                    <p className="citation">المصدر: IJNRD Study</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">
                    <FaChartLine className="inline ml-2 text-indigo-600" />
                    قياس الأداء
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">قياس دقيق ومباشر</strong>
                    <p className="text-sm mt-2">تحليلات فورية لكل جانب من جوانب الحملة (نقرات، تحويلات، ROI).</p>
                    <p className="citation">المصدر: Digital Marketing Metrics Study</p>
                  </td>
                  <td className="bg-red-50">
                    <strong className="text-red-700">قياس صعب وغير دقيق</strong>
                    <p className="text-sm mt-2">صعوبة في تتبع معدلات التحويل وتقييم الفعالية بدقة.</p>
                    <p className="citation">المصدر: IJFMR Research 2024</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">
                    <FaClock className="inline ml-2 text-orange-600" />
                    السرعة والمرونة
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">سريع ومرن</strong>
                    <p className="text-sm mt-2">يمكن تشغيل وتعديل الحملات في دقائق.</p>
                  </td>
                  <td className="bg-red-50">
                    <strong className="text-red-700">بطيء وجامد</strong>
                    <p className="text-sm mt-2">يحتاج وقتًا طويلاً للإعداد والتنفيذ، صعوبة في التعديل.</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">
                    <MdTrendingUp className="inline ml-2 text-teal-600" />
                    الاستهداف الدقيق
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">استهداف دقيق للغاية</strong>
                    <p className="text-sm mt-2">يمكن استهداف حسب العمر، الجنس، الاهتمامات، السلوك، الموقع، وغيرها.</p>
                    <p className="citation">المصدر: Comparative Analysis Study</p>
                  </td>
                  <td className="bg-red-50">
                    <strong className="text-red-700">استهداف واسع وغير دقيق</strong>
                    <p className="text-sm mt-2">يستهدف جمهورًا عريضًا، مما يؤدي إلى هدر في الإنفاق الإعلاني.</p>
                    <p className="citation">المصدر: Traditional vs Digital Study</p>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold text-gray-800">التأثير طويل المدى</td>
                  <td className="bg-yellow-50">
                    <strong className="text-yellow-700">متوسط</strong>
                    <p className="text-sm mt-2">المحتوى الرقمي يمكن أن يختفي أو يُنسى بسرعة في ظل المنافسة الشديدة.</p>
                  </td>
                  <td className="bg-green-50">
                    <strong className="text-green-700">تأثير دائم</strong>
                    <p className="text-sm mt-2">الإعلانات المطبوعة والتلفزيونية يمكن أن تترك أثرًا طويل المدى في ذهن المستهلك.</p>
                    <p className="citation">المصدر: UNH Management Science Study</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-3">📊 خلاصة المقارنة الأكاديمية:</h5>
            <p className="text-gray-700 leading-relaxed">
              وفقًا للدراسات الأكاديمية المتعددة، يتفوق التسويق الرقمي في <strong>التكلفة، الوصول، التفاعل، والقياس</strong>،
              بينما يتميز التسويق التقليدي في <strong>التأثير طويل المدى وبناء الثقة بالعلامة التجارية</strong>.
              الاستراتيجية الأمثل وفقًا للأبحاث هي الدمج بين الاثنين بنسبة 60-70% رقمي و30-40% تقليدي.
            </p>
          </div>
        </section>

        {/* ROI Section */}
        <section id="roi" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaDollarSign className="text-green-600" />
            4. العائد على الاستثمار (ROI): مقارنة أكاديمية
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="stat-card border-r-4 border-green-500">
              <h4 className="text-2xl font-bold text-green-700 mb-4">📈 التسويق الرقمي - ROI</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span><strong>التسويق عبر البريد الإلكتروني:</strong> يحقق $42 لكل $1 مُنفق</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span><strong>SEO (تحسين محركات البحث):</strong> عائد 22:1 في بعض الصناعات، يمكن أن يصل إلى 1,031%</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span><strong>الإعلانات الرقمية:</strong> 3x أعلى ROAS مقارنة بالإعلام التقليدي</span>
                </li>
              </ul>
              <p className="citation mt-4">
                المصادر: Digital Marketing Metrics Study, ROI Analysis 2023-2025, ResearchGate Publication on Digital Marketing ROI
              </p>
            </div>

            <div className="stat-card border-r-4 border-blue-500">
              <h4 className="text-2xl font-bold text-blue-700 mb-4">📺 التسويق التقليدي - ROI</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span><strong>إعلانات التلفزيون:</strong> تولد 70% من الأرباح المدفوعة بالتسويق بمعدل ROI $4.20 لكل دولار مُنفق</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span><strong>حملات البريد المباشر:</strong> معدلات استجابة 9% للقوائم المنزلية و 4.9% للقوائم المحتملة</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span><strong>الإعلانات التقليدية:</strong> تبني ثقة العلامة التجارية وتحقق رؤية طويلة المدى</span>
                </li>
              </ul>
              <p className="citation mt-4">
                المصادر: The ROI Showdown Study, Traditional vs Digital Marketing ROI 2025, Academic Comparison Studies
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-3">🎯 النتيجة الأكاديمية:</h5>
            <p className="text-gray-700 leading-relaxed mb-3">
              وفقًا لدراسة <strong>"Digital vs. Traditional Marketing ROI (2023-2025)"</strong> ومنشورات
              <strong>ResearchGate</strong>، يقدم التسويق الرقمي عائدًا أعلى على الاستثمار بشكل عام بسبب:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mr-4">
              <li>القدرة على استهداف الجمهور المناسب بدقة</li>
              <li>التحسين المستمر للحملات بناءً على البيانات الحقيقية</li>
              <li>التكلفة المنخفضة مقارنة بالوصول المحقق</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              💡 <strong>التوصية الأكاديمية:</strong> الاستراتيجية المثلى هي مزيج من الاثنين:
              60-70% رقمي و30-40% تقليدي للشركات الكبيرة، بينما يجب على الشركات الصغيرة التركيز على
              القنوات الرقمية بسبب الميزانيات المحدودة.
            </p>
          </div>
        </section>

        {/* Digital Marketing Examples */}
        <section id="digital-examples" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaChartLine className="text-primary-600" />
            5. أمثلة التسويق الرقمي من شركات عالمية
          </h3>

          {/* Coca-Cola */}
          <div className="example-card mb-6 border-r-4 border-red-500">
            <h4 className="text-2xl font-bold text-red-600 mb-4">🥤 Coca-Cola - حملات رقمية ناجحة</h4>

            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">1. حملة "Share a Coke"</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  في عام 2011، طبعت Coca-Cola أسماء شائعة على الزجاجات، بدءًا من أستراليا ونيوزيلندا ثم انتشرت عالميًا.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النتائج:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ زيادة 7% في استهلاك المنتجات من قبل الشباب الأستراليين</li>
                    <li>✓ أكثر من 18 مليون ظهور عبر وسائل التواصل الاجتماعي</li>
                    <li>✓ زيادة 39% في متابعي صفحة Facebook</li>
                    <li>✓ زيادة 870% في زوار الصفحة</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: Simplilearn Coca-Cola Marketing Strategy Case Study, WebFX Case Study
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">2. قناة CokeTV على YouTube</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  أنشأت Coca-Cola قنوات YouTube شهيرة في أوروبا بالتعاون مع مدوني الفيديو الشهيرين.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النتائج:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ القناة الألمانية جذبت أكثر من 268,000 مشترك</li>
                    <li>✓ 29 مليون مشاهدة</li>
                    <li>✓ واحدة من أنجح قنوات العلامات التجارية في البلاد</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: Digital Training Academy Case Study
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">3. منصة Consumer Data Service (CDS 2.0) على AWS</h5>
                <p className="text-gray-700 leading-relaxed">
                  مع أكثر من 200 علامة تجارية في مئات البلدان، أنشأت Coca-Cola حلًا عالميًا باستخدام AWS
                  لإنشاء استراتيجية تسويقية متسقة ومدفوعة ببيانات المستهلك في جميع أنحاء الشركة.
                </p>
                <p className="citation mt-2">
                  المصدر: AWS Solutions Case Study
                </p>
              </div>
            </div>
          </div>

          {/* Nike */}
          <div className="example-card mb-6 border-r-4 border-black">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">👟 Nike - التحول الرقمي الشامل</h4>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">1. استراتيجية التحول الرقمي</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  نقلت Nike فريق التسويق عبر وسائل التواصل الاجتماعي داخليًا وتحولت من تقديم "رسالة كبيرة واحدة"
                  إلى الحديث عن الإلهام والطموحات والتغلب على الصعاب.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النتائج:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ قبل 10 سنوات: 81% من أعمال Nike كانت عبر البيع بالجملة</li>
                    <li>✓ اليوم: انخفضت إلى 61%</li>
                    <li>✓ المبيعات الرقمية تشكل حاليًا 42% من إجمالي مبيعات Nike</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: Nike Case Study: Dominating Sportswear eCommerce, Digital Marketing Institute
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">2. تطور حملة #JustDoIt على وسائل التواصل</h5>
                <p className="text-gray-700 leading-relaxed">
                  انطلقت في عام 1988، وتطورت من دعوة بسيطة للعمل إلى رمز للتمكين والتحدي والتغلب على الشدائد،
                  مع رسائل جريئة ومثيرة للجدل أحيانًا على وسائل التواصل الاجتماعي.
                </p>
                <p className="citation mt-2">
                  المصدر: PR News - The Evolution of Nike's Digital Marketing
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">3. دمج تحليلات البيانات</h5>
                <p className="text-gray-700 leading-relaxed">
                  استحوذت Nike على علامة تحليلات البيانات Zodiac ونشرتها في العديد من تطبيقات الهواتف الذكية
                  بما في ذلك SNKRS وTraining Club وRun Club وتطبيق التجارة الإلكترونية لتتبع المشتريات والتنبؤ بالنشاط المستقبلي.
                </p>
                <p className="citation mt-2">
                  المصدر: ResearchGate - A study on Nike's digital marketing strategy based on the 4Ps theory
                </p>
              </div>
            </div>
          </div>

          {/* Amazon */}
          <div className="example-card mb-6 border-r-4 border-orange-500">
            <h4 className="text-2xl font-bold text-orange-600 mb-4">📦 Amazon - عملاق التجارة الإلكترونية</h4>

            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">1. النهج المتمحور حول العميل</h5>
                <p className="text-gray-700 leading-relaxed">
                  شعار "أكثر شركة في العالم تركيزًا على العملاء" كان شعار Amazon منذ عام 1994،
                  حيث حاولوا تقديم أسعار معقولة بشكل مريح للعملاء.
                </p>
                <p className="citation mt-2">
                  المصدر: Amazon Marketing Strategy Business Case Study - Smart Insights
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">2. ثقافة الاختبار المستمر</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  أنشأت Amazon منصة تجريب داخلية خاصة بها تسمى "Weblab".
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النتائج:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ 2011: 546 تجربة</li>
                    <li>✓ 2012: 1,092 تجربة</li>
                    <li>✓ 2013: 1,976 تجربة حول العالم</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: ResearchGate - A STUDY ON DIGITAL MARKETING with SPECIAL REFERENCE TO AMAZON.COM
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">3. حملة "Grow Your Brand"</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  أطلقت في أوائل عام 2020، وضعت Amazon كشريك تسويقي كامل، مع عرض مجموعة الإعلانات
                  من خلال دراسات حالة واقعية ودروس خطوة بخطوة وإرشادات شخصية للبائعين.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النتائج:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ إيرادات إعلانات Amazon وصلت إلى 56 مليار دولار بحلول عام 2024</li>
                    <li>✓ زيادة 30% في استخدام الإعلانات الممولة</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: Amazon Marketing Strategy Case Study 2025 - IIDE
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">4. استراتيجية SEO وAdWords</h5>
                <p className="text-gray-700 leading-relaxed">
                  كان نمو أعمال Amazon الأولي يعتمد على نهج تفصيلي لـ SEO وAdWords باستهداف ملايين الكلمات الرئيسية،
                  بالإضافة إلى استخدام التخصيص لتقديم توصيات ملائمة وعملية دفع واضحة يقلدها الكثيرون الآن.
                </p>
                <p className="citation mt-2">
                  المصدر: How Amazon Became an Ecom Giant - Marketing Strategy Case Study
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-3">💡 الدروس المستفادة من الأمثلة الرقمية:</h5>
            <ul className="text-gray-700 space-y-2 mr-4">
              <li>✅ <strong>التخصيص:</strong> جميع الشركات استخدمت البيانات لتخصيص التجربة</li>
              <li>✅ <strong>التفاعل:</strong> التركيز على بناء علاقات طويلة المدى مع العملاء</li>
              <li>✅ <strong>الابتكار:</strong> التجريب المستمر وتطوير استراتيجيات جديدة</li>
              <li>✅ <strong>القياس:</strong> الاعتماد على البيانات الحقيقية لتحسين الحملات</li>
            </ul>
          </div>
        </section>

        {/* Traditional Marketing Examples */}
        <section id="traditional-examples" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaNewspaper className="text-accent-600" />
            6. أمثلة التسويق التقليدي من حملات عالمية ناجحة
          </h3>

          {/* Marlboro */}
          <div className="example-card mb-6 border-r-4 border-red-600">
            <h4 className="text-2xl font-bold text-red-700 mb-4">🤠 Marlboro - حملة Marlboro Man</h4>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-3">
                حولت Marlboro السجائر المفلترة إلى رمز للرجولة القاسية من خلال شخصية Marlboro Man،
                وهي نموذج راعي البقر الذي يجسد روح الاستقلال والصلابة.
              </p>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-green-700 mb-2">📊 النجاح المحقق:</p>
                <ul className="text-sm text-gray-700 space-y-1 mr-4">
                  <li>✓ عرضت الحملة "روح الإنجاز للراعي الأمريكي"</li>
                  <li>✓ جعلت Marlboro واحدة من أكثر العلامات التجارية للسجائر مبيعًا في العالم</li>
                  <li>✓ تحولت علامة Marlboro إلى رمز ثقافي دائم</li>
                  <li>✓ استمرت الحملة لعقود وأثرت على سلوك المستهلك العالمي</li>
                </ul>
              </div>
              <p className="citation mt-3">
                المصدر: Illumeably - 20 Historic Marketing Campaigns That Changed Consumer Behavior
              </p>
              <div className="bg-yellow-50 p-3 rounded mt-3">
                <p className="text-sm text-gray-700">
                  <strong>📌 ملاحظة أكاديمية:</strong> هذه الحملة تُعتبر مثالًا كلاسيكيًا على قوة التسويق
                  التقليدي في بناء هوية العلامة التجارية وتغيير تصورات المستهلك من خلال الإعلانات المطبوعة
                  والتلفزيونية واللوحات الإعلانية.
                </p>
              </div>
            </div>
          </div>

          {/* McDonald's */}
          <div className="example-card mb-6 border-r-4 border-yellow-400">
            <h4 className="text-2xl font-bold text-yellow-600 mb-4">🍔 McDonald's - حملات تسويقية متعددة</h4>

            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">1. حملة "I'm Lovin' It"</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  ظهرت الحملة الأيقونية "I'm Lovin' It" في عام 2003، وتسلط الضوء على الارتباط العاطفي
                  للمستهلكين بالعلامة التجارية.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 النجاح المحقق:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ تجاوزت الحملة الحواجز اللغوية</li>
                    <li>✓ لاقت صدى في سياقات ثقافية مختلفة</li>
                    <li>✓ جعلت McDonald's مرادفًا للوجبات السريعة في العديد من المناطق حول العالم</li>
                    <li>✓ أطول حملة تشغيل للشركة بموسيقى جذابة وإعلانات مبهجة</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: IIDE - McDonald's Marketing Strategy 2025, Simplilearn Case Study
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">2. حملة "Famous Orders"</h5>
                <p className="text-gray-700 leading-relaxed mb-2">
                  حملة تعرض طلبات المشاهير، وهي مثال رئيسي على الاستفادة الفعالة من تأييد المشاهير
                  لزيادة المبيعات وظهور العلامة التجارية.
                </p>
                <div className="bg-white p-3 rounded mt-2">
                  <p className="font-bold text-green-700">📊 الاستراتيجية:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mr-4 mt-2">
                    <li>✓ تعاون مع مشاهير عالميين</li>
                    <li>✓ خلق ارتباطات عاطفية مع العملاء</li>
                    <li>✓ زيادة حركة المرور في المتاجر</li>
                    <li>✓ توليد ضجة إعلامية واسعة</li>
                  </ul>
                </div>
                <p className="citation mt-2">
                  المصدر: Brand Vision - The Magic Behind McDonald's Marketing Strategy
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="text-xl font-bold text-gray-800 mb-2">3. المزج بين التقليدي والرقمي</h5>
                <p className="text-gray-700 leading-relaxed">
                  تستثمر McDonald's بشكل كبير في الوسائط التقليدية مثل التلفزيون والراديو، بالإضافة
                  إلى المنصات الرقمية. توظف استراتيجية تسويقية متعددة الأوجه تشمل الإعلانات التقليدية
                  والتسويق الرقمي والمشاركة المجتمعية.
                </p>
                <p className="citation mt-2">
                  المصدر: Business Model Analyst - McDonald's Marketing Strategy (2025)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
            <h5 className="text-xl font-bold text-gray-800 mb-3">💡 الدروس المستفادة من الأمثلة التقليدية:</h5>
            <ul className="text-gray-700 space-y-2 mr-4">
              <li>✅ <strong>بناء الهوية:</strong> الحملات التقليدية تبني هويات قوية طويلة المدى للعلامات التجارية</li>
              <li>✅ <strong>الانتشار الجماهيري:</strong> الوصول إلى جمهور عريض في وقت واحد</li>
              <li>✅ <strong>الموثوقية:</strong> الإعلانات التقليدية غالبًا ما تُعتبر أكثر مصداقية</li>
              <li>✅ <strong>التأثير العاطفي:</strong> القدرة على خلق تجارب عاطفية دائمة</li>
              <li>✅ <strong>الدمج مع الرقمي:</strong> الشركات الناجحة تدمج التقليدي مع الرقمي للحصول على أفضل النتائج</li>
            </ul>
          </div>
        </section>

        {/* Findings and Recommendations */}
        <section id="findings" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaCheckCircle className="text-green-600" />
            7. النتائج والتوصيات الأكاديمية
          </h3>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">🔍 النتائج الرئيسية من الأبحاث الأكاديمية:</h4>
              <ol className="space-y-3 text-gray-700 mr-4">
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  <span><strong>التسويق الرقمي أكثر فعالية من حيث التكلفة:</strong> وفقًا لدراسات متعددة،
                  يوفر التسويق الرقمي ROI أعلى بكثير مع تكاليف أقل.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  <span><strong>التسويق التقليدي يبني الثقة:</strong> دراسة جامعة New Hampshire أظهرت أن
                  الإعلانات التقليدية تساهم بشكل أكبر في تقييم أصول العلامة التجارية.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  <span><strong>الدمج هو الأمثل:</strong> الدراسات الأكاديمية تشير إلى أن الجمع بين
                  الاستراتيجيتين يحقق أفضل النتائج.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">4.</span>
                  <span><strong>التسويق الرقمي يتفوق في القياس:</strong> القدرة على تتبع وتحليل كل جانب
                  من الحملة بدقة هي ميزة رئيسية للتسويق الرقمي.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">5.</span>
                  <span><strong>التحول الرقمي مستمر:</strong> كل الشركات العالمية الناجحة (Nike، Amazon،
                  Coca-Cola، McDonald's) تستثمر بكثافة في التسويق الرقمي.</span>
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">📋 التوصيات الأكاديمية للشركات:</h4>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-r-4 border-green-500">
                  <h5 className="text-lg font-bold text-gray-800 mb-2">للشركات الصغيرة والناشئة:</h5>
                  <ul className="text-gray-700 space-y-1 mr-4">
                    <li>✓ التركيز على القنوات الرقمية (85-90%)</li>
                    <li>✓ الاستثمار في SEO والتسويق عبر المحتوى</li>
                    <li>✓ استخدام وسائل التواصل الاجتماعي بكثافة</li>
                    <li>✓ التسويق عبر البريد الإلكتروني لعائد استثمار عالي</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-r-4 border-blue-500">
                  <h5 className="text-lg font-bold text-gray-800 mb-2">للشركات المتوسطة:</h5>
                  <ul className="text-gray-700 space-y-1 mr-4">
                    <li>✓ مزج 60-70% رقمي و30-40% تقليدي</li>
                    <li>✓ استخدام الإعلانات الرقمية المدفوعة</li>
                    <li>✓ الاستفادة من الإعلانات الإذاعية المحلية</li>
                    <li>✓ بناء حضور قوي عبر الإنترنت</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border-r-4 border-purple-500">
                  <h5 className="text-lg font-bold text-gray-800 mb-2">للشركات الكبيرة والعالمية:</h5>
                  <ul className="text-gray-700 space-y-1 mr-4">
                    <li>✓ استراتيجية متكاملة (50-60% رقمي، 40-50% تقليدي)</li>
                    <li>✓ الاستثمار في التلفزيون للوصول الجماهيري الواسع</li>
                    <li>✓ حملات رقمية مبتكرة مثل Coca-Cola وNike</li>
                    <li>✓ استخدام تحليلات البيانات الضخمة للتخصيص</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 الاستنتاج النهائي:</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                بناءً على المراجعة الشاملة للمصادر الأكاديمية ودراسات الحالة، فإن <strong>الاستراتيجية المثلى
                للتسويق في عام 2025</strong> تتطلب:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2 mr-4">
                  <li>🎯 <strong>التركيز الأساسي على التسويق الرقمي</strong> لفعاليته من حيث التكلفة والقياس</li>
                  <li>🎯 <strong>الحفاظ على وجود تقليدي استراتيجي</strong> لبناء الثقة والوصول الجماهيري</li>
                  <li>🎯 <strong>الاستثمار في البيانات والتحليلات</strong> لتحسين القرارات التسويقية</li>
                  <li>🎯 <strong>التخصيص والتفاعل</strong> كمحور أساسي في جميع الحملات</li>
                  <li>🎯 <strong>التجريب المستمر والتطوير</strong> كما تفعل Amazon وNike</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="section-card mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaBook className="text-primary-600" />
            8. المراجع الأكاديمية والمصادر
          </h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">📚 المصادر الأكاديمية الرئيسية:</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="reference-item">
                  <span className="font-bold">1.</span> Aboali, M. M. M., & Mudholker, G. (2024). Digital Marketing Vs. Traditional Marketing- General View Comparative.
                  <em>International Journal for Multidisciplinary Research (IJFMR)</em>, 6(4), July-August 2024.
                </li>
                <li className="reference-item">
                  <span className="font-bold">2.</span> Song, S. (2024). Digital vs. Traditional Advertising: Research Highlights Impact on Brand Valuation in M&As.
                  <em>Management Science, University of New Hampshire</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">3.</span> IGI Global. (2024). Digital Marketing vs. Traditional Marketing: Literature Review and Practical Lessons.
                  <em>Scientific Publishing</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">4.</span> ResearchGate. (2021). Traditional Marketing Versus Digital Marketing.
                  <em>Publication 353381903</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">5.</span> IJIRMPS. (2022). Comparative Analysis of Traditional Marketing vs. Digital Marketing.
                  <em>International Journal of Innovative Research in Management and Pharmacy Sciences</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">6.</span> IJNRD. A Comparative Study Between Traditional and Digital Marketing.
                  <em>International Journal of Novel Research and Development</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">7.</span> ResearchGate. (2020). Evaluating ROI in Digital Marketing Campaigns: Metrics, Measurement, and Insights.
                  <em>Publication 377598832</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">8.</span> ResearchGate. (2024). A study on Nike's digital marketing strategy based on the 4Ps theory and analysis of
                  competitiveness maintenance methods. <em>Publication 386754509</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">9.</span> ResearchGate. (2020). A Study on Digital Marketing - A Case Study with Special Reference to Amazon.com.
                  <em>Publication 340811469</em>.
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">📊 دراسات حالة وتقارير صناعية:</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="reference-item">
                  <span className="font-bold">10.</span> AWS. (2024). The Coca-Cola Company Case Study. <em>Amazon Web Services</em>.
                </li>
                <li className="reference-item">
                  <span className="font-bold">11.</span> Simplilearn. (2024). Coca-Cola Marketing Strategy: A Case Study.
                </li>
                <li className="reference-item">
                  <span className="font-bold">12.</span> WebFX. (2024). Case Study: 3 Famous Coca-Cola Marketing Campaigns.
                </li>
                <li className="reference-item">
                  <span className="font-bold">13.</span> Digital Training Academy. Coca-Cola targets millennials with CokeTV YouTube channel.
                </li>
                <li className="reference-item">
                  <span className="font-bold">14.</span> PR News. (2024). The Evolution of Nike's Digital Marketing: A Case Study of #JustDoIt on Social Media.
                </li>
                <li className="reference-item">
                  <span className="font-bold">15.</span> Digital Marketing Institute. Nike: Always Ahead of the Curve.
                </li>
                <li className="reference-item">
                  <span className="font-bold">16.</span> etailWest. (2024). Nike Case Study: Dominating Sportswear eCommerce with Marketing.
                </li>
                <li className="reference-item">
                  <span className="font-bold">17.</span> Smart Insights. (2024). Amazon marketing strategy business case study.
                </li>
                <li className="reference-item">
                  <span className="font-bold">18.</span> IIDE. (2025). Amazon Marketing Strategy - Case Study 2025.
                </li>
                <li className="reference-item">
                  <span className="font-bold">19.</span> EngageBay. Amazon Marketing Strategy Case Study for The Curious.
                </li>
                <li className="reference-item">
                  <span className="font-bold">20.</span> IIDE. (2025). In-depth McDonald's Marketing Strategy 2025.
                </li>
                <li className="reference-item">
                  <span className="font-bold">21.</span> Simplilearn. (2024). McDonald's Marketing Strategy - A Case Study.
                </li>
                <li className="reference-item">
                  <span className="font-bold">22.</span> Illumeably. (2024). 20 Historic Marketing Campaigns That Changed Consumer Behavior.
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">📈 تقارير ROI والتحليلات:</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="reference-item">
                  <span className="font-bold">23.</span> Neal Schaffer. (2025). Digital vs Traditional Marketing: 6 Key Metrics to Compare ROI in 2025.
                </li>
                <li className="reference-item">
                  <span className="font-bold">24.</span> Onimod Global. (2024). The ROI Showdown: Traditional Marketing vs. Digital Advertising.
                </li>
                <li className="reference-item">
                  <span className="font-bold">25.</span> AOK Marketing. (2025). Digital vs. Traditional Marketing ROI (2023-2025).
                </li>
                <li className="reference-item">
                  <span className="font-bold">26.</span> Matrix Bricks. (2025). Digital Marketing vs Traditional: Which Wins in 2025?
                </li>
                <li className="reference-item">
                  <span className="font-bold">27.</span> Julie Santiano. Data-Driven Guide to Digital vs. Traditional Marketing ROI.
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg mt-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>📌 ملاحظة منهجية:</strong> تم جمع جميع المعلومات الواردة في هذا البحث من مصادر أكاديمية
                موثوقة، دراسات حالة منشورة، وتقارير صناعية معتمدة. تم التحقق من صحة البيانات والإحصائيات من خلال
                مصادر متعددة لضمان الدقة والموثوقية الأكاديمية.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-effect p-6 text-center">
          <p className="text-gray-700 mb-2">
            <strong>DesignArena</strong> - بحث أكاديمي شامل حول التسويق الرقمي مقابل التسويق التقليدي
          </p>
          <p className="text-gray-600 text-sm">
            تم إعداد هذا البحث بناءً على مصادر أكاديمية موثوقة ودراسات حالة عملية من شركات عالمية
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © 2025 DesignArena Research Project
          </p>
        </footer>

      </div>
    </main>
  );
}
