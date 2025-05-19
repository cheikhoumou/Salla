        // Initialize Chart.js
let performanceChart;

// Initialize the form and progress bar
const totalSteps = 4;

function updateProgressBar() {
    const currentStepNumber = currentStep;
    const progressPercentage = ((currentStepNumber - 1) / (totalSteps - 1)) * 100;
    document.getElementById('formProgress').style.width = progressPercentage + '%';
}

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to create/update the performance chart
function updateChart(clicks, reach) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    if (performanceChart) {
        performanceChart.destroy();
    }

    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['النقرات', 'الوصول'],
            datasets: [{
                label: 'أداء الحملة',
                data: [clicks, reach],
                backgroundColor: [
                    '#44177e',
                    '#1B365D'
                ],
                borderColor: [
                    '#44177e',
                    '#1B365D'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

// Function to generate recommendations based on campaign data
function generateRecommendations(clicks, reach, budget, whatsappMessages) {
    const ctr = (clicks / reach) * 100;
    const cpc = budget / clicks;
    let recommendations = [];

    if (ctr < 1) {
        recommendations.push("نقترح تحسين جودة المحتوى الإعلاني لزيادة معدل النقر");
    }
    if (cpc > 2) {
        recommendations.push("نوصي بمراجعة استراتيجية الاستهداف لتقليل تكلفة النقرة");
    }
    if (reach < 1000) {
        recommendations.push("نقترح توسيع نطاق الاستهداف لزيادة الوصول");
    }
    if (whatsappMessages < 50) {
        recommendations.push("نوصي بزيادة التفاعل مع العملاء عبر الواتساب لتحسين معدل التحويل");
    }

    return recommendations;
}

// Function to update price when drone count changes
function updatePrice() {
    const droneSelect = document.getElementById('droneCount');
    const displayPrice = document.getElementById('displayPrice');
    
    if (droneSelect.selectedIndex > 0) {
        const selectedOption = droneSelect.options[droneSelect.selectedIndex];
        const price = parseInt(selectedOption.getAttribute('data-price'));
        displayPrice.textContent = formatNumber(price) + ' ريال';
    } else {
        displayPrice.textContent = '0 ريال';
    }
}

// Function to show/hide the "other city" field
function toggleOtherCity() {
    const citySelect = document.getElementById('city');
    const otherCityGroup = document.getElementById('otherCityGroup');
    
    if (citySelect.value === 'أخرى') {
        otherCityGroup.style.display = 'block';
    } else {
        otherCityGroup.style.display = 'none';
    }
}

// Function to show/hide the "other event" field
function toggleOtherEvent() {
    const eventSelect = document.getElementById('eventType');
    const otherEventGroup = document.getElementById('otherEventGroup');
    
    if (eventSelect.value === 'أخرى') {
        otherEventGroup.style.display = 'block';
    } else {
        otherEventGroup.style.display = 'none';
    }
}

// Check if all required fields in the current step are filled
function isCurrentStepValid() {
    const currentStepElement = document.querySelector(`.step[data-step="${currentStep}"]`);
    const requiredFields = currentStepElement.querySelectorAll('input[required], select[required]');
    
    for (const field of requiredFields) {
        if (!field.value) {
            field.classList.add('error');
            return false;
        } else {
            field.classList.remove('error');
        }
    }
    
    return true;
}

// Initialize validation for input fields
function initValidation() {
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('input', function() {
            if (this.value) {
                this.classList.remove('error');
            }
        });
    });
}

// Step navigation
let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-step="${step}"]`).classList.add('active');
    currentStep = step;
    updateProgressBar();
}

// Function to generate and download PDF
function generatePDF() {
    // Check if drone count is selected
    const droneSelect = document.getElementById('droneCount');
    if (droneSelect.selectedIndex === 0) {
        showPopup("يجب تحديد عدد الدرونز المطلوبة قبل إنشاء عرض السعر", "error");
        return; // Stop execution if no drone count selected
    }

    const { jsPDF } = window.jspdf;

    // Get form data
    const fullName = document.getElementById('fullName').value;
    const organization = document.getElementById('organization').value;
    const organizationName = document.getElementById('organizationName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    const city = document.getElementById('city').value;
    const otherCity = document.getElementById('otherCity').value;
    const finalCity = city === 'أخرى' ? otherCity : city;
    
    const eventType = document.getElementById('eventType').value;
    const otherEvent = document.getElementById('otherEvent').value;
    const finalEventType = eventType === 'أخرى' ? otherEvent : eventType;
    
    const eventDate = document.getElementById('eventDate').value;
    // Use Gregorian date format (English)
    const formattedDate = new Date(eventDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const eventLocation = document.getElementById('eventLocation').value;
    const droneCount = document.getElementById('droneCount').value;
    const notes = document.getElementById('notes').value;

                    // Get price
    const selectedOption = droneSelect.options[droneSelect.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price'));
    
    // Color scheme to match the shown image
    const primaryColor = '#1B365D'; // Dark blue
    const accentColor = '#44177e'; // Purple accent
    const textColor = '#333333';
    const lightBg = '#f5f5f5';
    
    // Create the quote content for PDF
    const quote = document.createElement('div');
    quote.id = 'pdf-content';
    quote.style.width = '800px';
    quote.style.padding = '0';
    quote.style.direction = 'rtl';
    quote.style.backgroundColor = 'white';
    quote.style.fontFamily = 'Arial, sans-serif';
    quote.style.position = 'relative';
    
    // Generate current date in Gregorian format (English)
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // Create template matching the image but with original text
    quote.innerHTML = `
        <div style="position: relative; z-index: 1;">
            <!-- Header with logo and contact info -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; padding: 20px; border-bottom: 1px solid #ddd;">
                <div style="background-color: ${accentColor}; padding: 15px 50px; color: white; font-weight: bold; font-size: 24px; text-align: right;">
                    عرض السعر
                    </div>
                <div>
                    <img src="https://droneshow.sa/wp-content/uploads/2025/05/Brown-and-Pink-Illustration-Character-Ice-Cream-Logo-1.png" style="width: 130px; height: auto;">
                    </div>
                </div>
            
            <!-- Quote reference and date -->
            <div style="background-color: ${lightBg}; padding: 10px 20px; margin-bottom: 20px;">
                <p style="text-align: right; font-weight: bold; color: ${primaryColor}; margin-bottom: 10px;">
                    عرض سعر صادر من مؤسسة شاهين لطائرات الدرونز الرقم الوطني الموحد للمنشأة 7034753348
                </p>
                <table style="width: 100%;">
                    <tr>
                        <td style="text-align: right; font-weight: bold; color: ${primaryColor};">عرض سعر رقم:</td>
                        <td style="text-align: left; font-family: 'Arial', sans-serif;">${Math.floor(Math.random() * 10000)}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right; font-weight: bold; color: ${primaryColor};">تاريخ الإصدار:</td>
                        <td style="text-align: left; font-family: 'Arial', sans-serif;">${currentDate}</td>
                    </tr>
                </table>
            </div>
            
            <!-- Two-column layout for client and event info -->
            <div style="display: flex; margin-bottom: 20px;">
                <!-- Client Information Column -->
                <div style="flex: 1; padding: 0 20px;">
                    <h3 style="color: ${primaryColor}; border-bottom: 2px solid ${accentColor}; padding-bottom: 5px; margin-bottom: 15px;">بيانات العميل</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">اسم الجهة:</td>
                            <td style="padding: 8px 0;">${organizationName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">اسم ممثل الجهة:</td>
                            <td style="padding: 8px 0;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">كيان الجهة:</td>
                            <td style="padding: 8px 0;">${organization}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">البريد الإلكتروني:</td>
                            <td style="padding: 8px 0; direction: ltr; text-align: right;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">رقم الاتصال:</td>
                            <td style="padding: 8px 0; direction: ltr; text-align: right; font-family: 'Arial', sans-serif;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">المدينة:</td>
                            <td style="padding: 8px 0;">${finalCity}</td>
                        </tr>
                    </table>
        </div>
                
                <!-- Event Details Column -->
                <div style="flex: 1; padding: 0 20px;">
                    <h3 style="color: ${primaryColor}; border-bottom: 2px solid ${accentColor}; padding-bottom: 5px; margin-bottom: 15px;">تفاصيل الفعالية</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">نوع الفعالية:</td>
                            <td style="padding: 8px 0;">${finalEventType}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">تاريخ الفعالية:</td>
                            <td style="padding: 8px 0; font-family: 'Arial', sans-serif;">${formattedDate}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">موقع الفعالية:</td>
                            <td style="padding: 8px 0;">${eventLocation}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: ${primaryColor};">الملاحظات:</td>
                            <td style="padding: 8px 0;">${notes || 'لا توجد ملاحظات'}</td>
                        </tr>
                    </table>
    </div>
            </div>

            <!-- Service Table -->
            <div style="margin-bottom: 30px; padding: 0 20px;">
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
                    <thead>
                        <tr style="background-color: ${primaryColor}; color: white;">
                            <th style="padding: 10px; text-align: right; border: 1px solid #ddd; width: 60%;">الوصف</th>
                            <th style="padding: 10px; text-align: center; border: 1px solid #ddd; width: 20%;">الكمية</th>
                            <th style="padding: 10px; text-align: center; border: 1px solid #ddd; width: 20%;">الإجمالي</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 15px 10px; text-align: right; border: 1px solid #ddd;">
                                <strong>عرض طائرات الدرون</strong><br>
                                <span style="font-size: 13px;">   مدة عرض الدرونز يتراوح مابين 15 دقيقة إلى 20 دقيقة.</span>
                            </td>
                            <td style="padding: 15px 10px; text-align: center; border: 1px solid #ddd; font-family: 'Arial', sans-serif;">${droneCount}</td>
                            <td style="padding: 15px 10px; text-align: center; border: 1px solid #ddd; font-family: 'Arial', sans-serif;">${formatNumber(price)} ريال</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr style="background-color: ${lightBg};">
                            <td colspan="2" style="padding: 10px; text-align: left; border: 1px solid #ddd; font-weight: bold;">الإجمالي</td>
                            <td style="padding: 10px; text-align: center; border: 1px solid #ddd; font-weight: bold; font-family: 'Arial', sans-serif;">${formatNumber(price)} ريال</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 10px; text-align: center; font-size: 13px; color: #666;">
                                السعر شامل الضريبة <span style="font-family: 'Arial', sans-serif;">15%</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                    </div>
            
            <!-- Bank Details -->
            <div style="margin-bottom: 20px; padding: 0 20px; font-size: 13px;">
                <p style="text-align: center; margin-bottom: 10px;">
                    <strong style="color: ${primaryColor};">مؤسسة شاهين لطائرات الدرونز | الأهلي السعودي</strong>
                </p>
                <p style="text-align: center; margin-bottom: 5px; direction: ltr; font-family: 'Arial', sans-serif;">
                    رقم الحساب: 014000224653308
                </p>
                <p style="text-align: center; margin-bottom: 5px; direction: ltr; font-family: 'Arial', sans-serif;">
                    رقم الآيبان: SA8010000014000224653308
                </p>
                <p style="text-align: center; margin-bottom: 5px;">
                    يرجى إرسال صورة من إيصال السداد عبر الواتساب: <span style="font-family: 'Arial', sans-serif;">0557617706</span>
                </p>
                <p style="text-align: center; margin-bottom: 5px;">
                    البريد الإلكتروني: info@droneshow.sa
                </p>
                <p style="text-align: center; margin-bottom: 5px;">
                    مؤسسة شاهين تقوم بإصدار فاتورة ضريبية بعد إنهاء إجراءات الدفع
                </p>
            </div>

            <!-- Adding Signature, Stamp, and GACA license to first page -->
            <div style="display: flex; justify-content: space-between; margin-top: 20px; padding: 0 30px;">
                <div style="text-align: center;">
                    <!-- GACA Logo with text above it -->
                    <div style="text-align: center;">
                        <p style="margin-bottom: 5px; font-weight: bold; color: ${primaryColor}; font-size: 14px;">مرخص من قبل</p>
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/GACA-Logo-Descriptor-Full-Colour-2.png" style="width: 120px; height: auto;">
                    </div>
                </div>
                <div style="text-align: center;">
                    <div style="margin-top: 10px; width: 150px;">
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/katm.jpg" style="width: 120px; height: auto;">
                    </div>
                    <p style="margin-top: 5px; font-size: 14px;">الختم</p>
                </div>
                <div style="text-align: center;">
                    <p style="margin-bottom: 20px; font-weight: bold; color: ${primaryColor}; font-size: 14px;">الرئيس التنفيذي: هادي أحمد هتان</p>
                    <div style="border-bottom: 1px solid #ddd; width: 150px; margin: 0 auto; padding-bottom: 5px;">
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/توقيعي.png" style="width: 120px; height: auto;">
                    </div>
                    <p style="margin-top: 5px; font-size: 14px;">التوقيع</p>
                </div>
            </div>
            
            <!-- Page Numbers -->
            <div style="position: absolute; bottom: 10px; right: 20px; background-color: #4CAF50; color: white; padding: 5px 20px; font-size: 14px; font-family: 'Arial', sans-serif;">
                1/2
            </div>
        </div>
    `;

    // Create a second page with the important notes (using original content)
    const secondPage = document.createElement('div');
    secondPage.style.width = '800px';
    secondPage.style.padding = '0';
    secondPage.style.direction = 'rtl';
    secondPage.style.backgroundColor = 'white';
    secondPage.style.fontFamily = 'Arial, sans-serif';
    secondPage.style.position = 'relative';

    secondPage.innerHTML = `
        <div style="position: relative; z-index: 1;">
            <!-- Header with logo and contact info (repeated on page 2) -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 20px; border-bottom: 1px solid #ddd; margin-bottom: 20px;">
                <div style="background-color: ${accentColor}; padding: 15px 50px; color: white; font-weight: bold; font-size: 24px; text-align: right;">
                    عرض السعر
                </div>
                <div>
                    <img src="https://droneshow.sa/wp-content/uploads/2025/05/Brown-and-Pink-Illustration-Character-Ice-Cream-Logo-1.png" style="width: 130px; height: auto;">
                </div>
            </div>
            
            <!-- Terms and conditions with the new content - removed numbers -->
            <div style="margin-bottom: 20px; background-color: #f7f7f7; padding: 15px;">
                <h2 style="color: ${primaryColor}; text-align: center; margin-bottom: 20px; font-size: 20px;">
                    شروط وأحكام طلب عرض سعر
                </h2>
                
                <h3 style="color: ${primaryColor}; border-bottom: 1px solid ${accentColor}; padding-bottom: 5px; margin-bottom: 15px; font-size: 18px; text-align: center;">
                    عرض الدرونز - مؤسسة شاهين محترف لطائرات الدرونز
                </h3>
                
                <div style="font-size: 14px;">
                    <p style="margin-bottom: 10px;">
                        <strong>التسعير المبدئي:</strong> الأسعار المعروضة في النموذج تقديرية وتخضع للتحديث النهائي بناًء على تقييم الموقع والإحتياجات الفنية للعرض.
                    </p>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>صلاحية  العرض:</strong> عرض السعر صالح لمدة 7 أيام من تاريخ إصداره، ما لم يتم الإتفاق على غير ذلك كتابًيا.
                    </p>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>تأكيد الحجز:</strong> يتم تأكيد الحجز فقط بعد توقيع العقد وسداد الدفعة المقدمة المتفق عليها.
                    </p>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>الرسوم اإلضافية بسعر تنافسي:</strong>
                    </p>
                    <ul style="list-style-type: none; padding-right: 20px; margin-bottom: 10px;">
                        <li style="margin-bottom: 5px;">• التصاميم الخاصة أو الطلبات غير الإعتياديه قد تؤدي إلى تعديل السعر النهائي مثل عرض جوي مدمج بالألعاب النارية.</li>
                        <li style="margin-bottom: 5px;">• عربة بث مباشر لايف استريمينج للعرض الجوي.</li>
                        <li style="margin-bottom: 5px;">• تصوير وانتاج الحدث (برومو).</li>
                    </ul>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>الإلغاء والتعديل:</strong>
                    </p>
                    <ul style="list-style-type: none; padding-right: 20px; margin-bottom: 10px;">
                        <li style="margin-bottom: 5px;">• يحق للعميل إلغاء العرض قبل 7 أيام من تاريخ العرض واسترداد الدفعة المقدمة.</li>
                        <li style="margin-bottom: 5px;">• في حال الإلغاء بعد ذلك، تحتفظ "درون شو - مؤسسة شاهين محترف لطائرات الدرونز" بحق خصم نسبة من الدفعة كمصاريف تحضيرية.</li>
                        <li style="margin-bottom: 5px;">• للعميل الحق في تعديل التصميم مرتين كحد أقصى قبل موعد العرض بـ 7 أيام على الأقل.</li>
                    </ul>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>الإلتزامات التنظيمية:</strong>
                    </p>
                    <ul style="list-style-type: none; padding-right: 20px; margin-bottom: 10px;">
                        <li style="margin-bottom: 5px;">• يلتزم العميل بالحصول على التصاريح الرسمية للموقع (مساحة أرض ال تقل عن 150 متر مربع )، وتوفير البيئة الآمنة لفريق العرض.</li>
                        <li style="margin-bottom: 5px;">• في حال الظروف الجوية غير المناسبة (رياح شديدة,أمطار غزيرة) يحق للشركة تأجيل العرض وتحديد موعد بديل بالتنسيق مع العميل.</li>
                        <li style="margin-bottom: 5px;">• درون شو - مؤسسة شاهين محترف لطائرات الدرونز تلتزم بكافة التصاريح التنظيمية والتعليمات المتعلقة بالطيران الجوي داخل المملكة.</li>
                    </ul>
                    
                    <p style="margin-bottom: 10px;">
                        <strong>التواصل والتنسيق:</strong> يتم التنسيق عبر الوسائل الرسمية المحددة في الطلب، ويجب الألتزام بالمواعيد النهائية لتأكيد التفاصيل قبل العرض.
                    </p>
                </div>
            </div>
            
            <!-- Certificate image in the center -->
            <div style="text-align: center; margin: 20px 0 40px;">
                <img src="https://droneshow.sa/wp-content/uploads/2025/05/شهادة.jpg" style="width: 400px; height: auto;">
            </div>
            
            <!-- Signature and Stamp moved to the second page - ENLARGED -->
            <div style="display: flex; justify-content: space-between; margin-top: 30px; padding: 0 30px;">
                <div style="text-align: center;">
                    <p style="margin-bottom: 40px; font-weight: bold; color: ${primaryColor}; font-size: 18px;">الرئيس التنفيذي: هادي أحمد هتان</p>
                    <div style="border-bottom: 1px solid #ddd; width: 200px; margin: 0 auto; padding-bottom: 5px;">
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/توقيعي.png" style="width: 180px; height: auto;">
                    </div>
                    <p style="margin-top: 5px; font-size: 16px;">التوقيع</p>
                </div>
                <div style="text-align: center;">
                    <div style="margin-top: 40px; width: 200px;">
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/katm.jpg" style="width: 180px; height: auto;">
                    </div>
                    <p style="margin-top: 5px; font-size: 16px;">الختم</p>
                    
                    <!-- GACA Logo with text above it - ENLARGED -->
                    <div style="margin-top: 15px; text-align: center;">
                        <p style="margin-bottom: 8px; font-weight: bold; color: ${primaryColor}; font-size: 18px;">مرخص من قبل</p>
                        <img src="https://droneshow.sa/wp-content/uploads/2025/05/GACA-Logo-Descriptor-Full-Colour-2.png" style="width: 150px; height: auto;">
                    </div>
                </div>
            </div>

            <!-- Page Numbers -->
            <div style="position: absolute; bottom: 10px; right: 20px; background-color: #4CAF50; color: white; padding: 5px 20px; font-size: 14px; font-family: 'Arial', sans-serif;">
                2/2
            </div>
        </div>
    `;

    // Add to document temporarily
    document.body.appendChild(quote);
    document.body.appendChild(secondPage);

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = 'جاري إنشاء عرض السعر...';
    document.body.appendChild(loadingDiv);

    // Function to convert image URL to base64
    function loadImageAsBase64(url, callback) {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            callback(canvas.toDataURL('image/png'));
        };
        img.onerror = function() {
            console.error('Error loading image:', url);
            callback(null);
        };
        img.src = url;
        
        // Set a timeout in case the image doesn't load
        setTimeout(function() {
            if (!img.complete) {
                console.error('Image load timeout:', url);
                img.src = ''; // Abort the image request
                callback(null);
            }
        }, 10000); // 10 second timeout
    }

    // Function to replace image sources with base64 data
    function convertImagesToBase64(element, callback) {
        const images = element.querySelectorAll('img');
        let imagesRemaining = images.length;
        
        if (imagesRemaining === 0) {
            callback();
            return;
        }
        
        images.forEach(img => {
            if (img.src.startsWith('data:')) {
                imagesRemaining--;
                if (imagesRemaining === 0) callback();
                return;
            }
            
            loadImageAsBase64(img.src, function(base64Data) {
                if (base64Data) {
                    img.src = base64Data;
                } else {
                    // Create a fallback SVG if image couldn't be loaded
                    const svgData = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100"><rect width="200" height="100" fill="#f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="14" text-anchor="middle" dominant-baseline="middle" fill="#999">Image Unavailable</text></svg>')}`;
                    img.src = svgData;
                }
                
                imagesRemaining--;
                if (imagesRemaining === 0) callback();
            });
        });
    }

    // Convert images to base64 in both pages
    convertImagesToBase64(quote, function() {
        convertImagesToBase64(secondPage, function() {
            // Now convert to PDF after images are processed
            html2canvas(quote, {
                scale: 2,
                useCORS: true,
                logging: false,
                onclone: function(clonedDoc) {
                    const clonedElement = clonedDoc.getElementById('pdf-content');
                    clonedElement.style.display = 'block';
                }
            }).then(canvas1 => {
                // Convert second page to image
                html2canvas(secondPage, {
                    scale: 2,
                    useCORS: true,
                    logging: false
                }).then(canvas2 => {
                    const imgData1 = canvas1.toDataURL('image/jpeg', 1.0);
                    const imgData2 = canvas2.toDataURL('image/jpeg', 1.0);
                    
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    const pdfWidth = pdf.internal.pageSize.getWidth();
                    const pdfHeight = pdf.internal.pageSize.getHeight();
                        
                    // Add first page
                    const imgWidth1 = canvas1.width;
                    const imgHeight1 = canvas1.height;
                    const ratio1 = Math.min(pdfWidth / imgWidth1, pdfHeight / imgHeight1);
                    const imgX1 = (pdfWidth - imgWidth1 * ratio1) / 2;
                    const imgY1 = 0;

                    pdf.addImage(imgData1, 'JPEG', imgX1, imgY1, imgWidth1 * ratio1, imgHeight1 * ratio1);
                    
                    // Add second page
                    pdf.addPage();
                    const imgWidth2 = canvas2.width;
                    const imgHeight2 = canvas2.height;
                    const ratio2 = Math.min(pdfWidth / imgWidth2, pdfHeight / imgHeight2);
                    const imgX2 = (pdfWidth - imgWidth2 * ratio2) / 2;
                    const imgY2 = 0;
                    
                    pdf.addImage(imgData2, 'JPEG', imgX2, imgY2, imgWidth2 * ratio2, imgHeight2 * ratio2);
                    
                    // Save the PDF
                    pdf.save(`عرض_سعر_درون_شو_${fullName}_${new Date().toLocaleDateString('ar-SA').replace(/\//g, '-')}.pdf`);

                    // Cleanup
                    document.body.removeChild(quote);
                    document.body.removeChild(secondPage);
                    document.body.removeChild(loadingDiv);
                    
                    // Show success message
                    showPopup('تم إنشاء عرض السعر بنجاح!', 'success');
                }).catch(error => {
                    console.error('Error generating PDF:', error);
                    document.body.removeChild(quote);
                    document.body.removeChild(secondPage);
                    document.body.removeChild(loadingDiv);
                    showPopup('حدث خطأ أثناء إنشاء عرض السعر. الرجاء المحاولة مرة أخرى.', 'error');
                });
            }).catch(error => {
                console.error('Error generating PDF:', error);
                document.body.removeChild(quote);
                document.body.removeChild(secondPage);
                document.body.removeChild(loadingDiv);
                showPopup('حدث خطأ أثناء إنشاء عرض السعر. الرجاء المحاولة مرة أخرى.', 'error');
            });
        });
    });
}

// Add modal/popup functionality
function showPopup(message, type = 'error') {
    // Remove any existing popup
    const existingPopup = document.getElementById('customPopup');
    if (existingPopup) {
        document.body.removeChild(existingPopup);
    }
    
    // Create popup container
    const popup = document.createElement('div');
    popup.id = 'customPopup';
    popup.className = `custom-popup ${type}`;
    
    // Icon based on type
    let icon = '';
    if (type === 'error') {
        icon = '<i class="fas fa-exclamation-circle"></i>';
    } else if (type === 'success') {
        icon = '<i class="fas fa-check-circle"></i>';
    } else if (type === 'info') {
        icon = '<i class="fas fa-info-circle"></i>';
    }
    
    // Create popup content
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <span class="popup-icon">${icon}</span>
                <span class="popup-close">&times;</span>
            </div>
            <div class="popup-body">
                <p>${message}</p>
            </div>
            <div class="popup-footer">
                <button class="popup-button">موافق</button>
            </div>
        </div>
    `;
    
    // Add popup to body
    document.body.appendChild(popup);
    
    // Animate popup
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    
    // Close popup when clicking close button or OK button
    const closeBtn = popup.querySelector('.popup-close');
    const okBtn = popup.querySelector('.popup-button');
    
    function closePopup() {
        popup.classList.remove('show');
        setTimeout(() => {
            if (popup.parentNode) {
                document.body.removeChild(popup);
            }
        }, 300);
    }
    
    closeBtn.addEventListener('click', closePopup);
    okBtn.addEventListener('click', closePopup);
    
    // Auto close after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(closePopup, 5000);
    }
}

// Initialize the form
document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
    updateProgressBar();
    initValidation();

    // Add event listeners for next/prev buttons
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', () => {
            if (isCurrentStepValid()) {
                if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
                window.scrollTo(0, 0);
                }
            } else {
                showPopup("يرجى ملء جميع الحقول المطلوبة", "error");
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
                window.scrollTo(0, 0);
            }
        });
    });

    // Event listeners for city selection
    document.getElementById('city').addEventListener('change', toggleOtherCity);

    // Event listeners for event type selection
    document.getElementById('eventType').addEventListener('change', toggleOtherEvent);

    // Event listener for drone count selection
    document.getElementById('droneCount').addEventListener('change', updatePrice);
    
    // Add input event listeners for validation
    const allInputs = document.querySelectorAll('input, select, textarea');
    allInputs.forEach(input => {
        input.addEventListener('input', function() {
            updateProgressBar();
        });
    });
});
