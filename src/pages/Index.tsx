import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: '',
    area: '',
    phone: '',
    email: ''
  });

  const [calcData, setCalcData] = useState({
    area: 100,
    npkCost: 25000,
    npkReduction: 15,
    yieldIncrease: 3.2,
    grainPrice: 12000
  });

  const calculateSavings = () => {
    const npkSavings = (calcData.area * calcData.npkCost * calcData.npkReduction) / 100;
    const yieldRevenue = calcData.area * calcData.yieldIncrease * calcData.grainPrice;
    const totalBenefit = npkSavings + yieldRevenue;
    const humatCost = calcData.area * 800;
    const netProfit = totalBenefit - humatCost;
    const roi = ((netProfit / humatCost) * 100).toFixed(0);
    
    return {
      npkSavings: Math.round(npkSavings),
      yieldRevenue: Math.round(yieldRevenue),
      totalBenefit: Math.round(totalBenefit),
      humatCost: Math.round(humatCost),
      netProfit: Math.round(netProfit),
      roi
    };
  };

  const results = calculateSavings();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для расчета экономии.",
    });
    setFormData({ company: '', area: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/9ec7dcaa-f559-4bf0-9f9f-eb93c65dcbc3/files/adfb8823-928b-47b8-bf04-7295453c1611.jpg')`
        }}
      >
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Верните урожайность, а не увеличивайте норму химии
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-100 font-medium">
              Полевой гумат PRO — жидкий гуминовый концентрат на основе торфа для крупных хозяйств: для зерновых, картофеля и кормовых культур
            </h2>
            <div className="flex gap-4 items-center text-lg">
              <Icon name="CheckCircle2" className="text-green-400 flex-shrink-0" size={24} />
              <span>Снижение затрат на минеральные удобрения</span>
            </div>
            <div className="flex gap-4 items-center text-lg mt-4">
              <Icon name="CheckCircle2" className="text-green-400 flex-shrink-0" size={24} />
              <span>Стабильный урожай даже в неблагоприятные годы</span>
            </div>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-primary">Получить расчет экономии на 1 га</h3>
              <p className="text-muted-foreground mb-6">Заполните форму и получите персональный расчет для вашего хозяйства</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Название хозяйства"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                  className="text-base"
                />
                <Input
                  placeholder="Площадь и основные культуры"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  required
                  className="text-base"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="text-base"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="text-base"
                />
                <Button type="submit" size="lg" className="w-full text-lg font-semibold">
                  Получить пилотный расчет
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Без спама. Только персональный расчет и рекомендации для вашего хозяйства
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Одно решение вместо десятка экспериментов
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Полевой гумат PRO — линейка торфяных гуминовых концентратов, заточенных под технологии крупных хозяйств. 
              Вы получаете продукт с понятными схемами внесения и расчетом экономии минеральных удобрений для ваших культур и почв.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ClipboardList" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Экспресс-анализ</h3>
                <p className="text-muted-foreground">
                  Проводим анализ текущей схемы питания ваших полей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Подбор дозировок</h3>
                <p className="text-muted-foreground">
                  Точные регламенты под ваши поля и культуры
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="LineChart" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Сопровождение</h3>
                <p className="text-muted-foreground">
                  Фиксируем результат по урожайности и затратам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Что вы выигрываете с Полевым гуматом PRO
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Реальные преимущества для вашего хозяйства, подтвержденные полевыми испытаниями
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Меньше затрат на химию</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Часть минеральных удобрений заменяется гуматом без потери урожайности. Экономия бюджета на каждом гектаре.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Урожай спокойнее переносит стресс</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Засуха, заморозки, гербицидная нагрузка дают меньшие потери. Стабильность в неблагоприятные годы.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Безболезненный старт</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Встраиваемся в вашу текущую технологию, без революций и остановки работ. Минимум изменений — максимум эффекта.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Результат в цифрах</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Показываем эффект в центнерах и рублях на гектар, а не в обещаниях. Прозрачная отчетность по каждому полю.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-teal-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Работаем с агрономами</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Даем инструмент, который усиливает вашу команду, а не конфликтует с ней. Говорим на языке профессионалов.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Сертифицированный продукт</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Органическое удобрение на основе торфа. Полное соответствие требованиям агрохимии и безопасности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Почему нам доверяют хозяйства и агросервисы
          </h2>
          <p className="text-center text-xl mb-16 max-w-3xl mx-auto opacity-90">
            Цифры, факты и реальные отзывы от агрономов
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white text-foreground">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="TrendingUp" className="text-primary" size={40} />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">+3.2 ц/га</div>
                  <p className="text-muted-foreground font-medium">средний прирост урожайности</p>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Пилотные хозяйства в 2023-2024 гг., озимая пшеница, площадь испытаний 450+ га
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-foreground">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Percent" className="text-primary" size={40} />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">-15%</div>
                  <p className="text-muted-foreground font-medium">снижение нормы NPK</p>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  При сохранении или росте урожайности. Данные полевых испытаний на зерновых культурах
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-foreground">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Shield" className="text-primary" size={40} />
                  </div>
                  <div className="text-5xl font-bold text-primary mb-2">92%</div>
                  <p className="text-muted-foreground font-medium">стабильность урожая</p>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Сокращение потерь от погодного стресса в неблагоприятные годы на 8-12% по сравнению с контролем
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex gap-4 items-start">
                <Icon name="Quote" className="text-white/60 flex-shrink-0" size={40} />
                <div>
                  <p className="text-lg mb-4 italic">
                    «Мы начали с обработки части площадей под озимой пшеницей. По итогам сезона получили плюс к урожайности и снизили норму NPK. 
                    Главное — всё было посчитано: я защитил это решение перед руководством на цифрах, а не на вере.»
                  </p>
                  <p className="font-semibold">Михаил Соколов</p>
                  <p className="text-sm text-white/70">Главный агроном, АО «Нива», Тамбовская область</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Калькулятор экономии
              </h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте выгоду для вашего хозяйства прямо сейчас
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Исходные данные</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Площадь посева, га
                      </label>
                      <Input
                        type="number"
                        value={calcData.area}
                        onChange={(e) => setCalcData({...calcData, area: Number(e.target.value)})}
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Затраты на NPK, ₽/га
                      </label>
                      <Input
                        type="number"
                        value={calcData.npkCost}
                        onChange={(e) => setCalcData({...calcData, npkCost: Number(e.target.value)})}
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Снижение нормы NPK, %
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="5"
                          max="25"
                          value={calcData.npkReduction}
                          onChange={(e) => setCalcData({...calcData, npkReduction: Number(e.target.value)})}
                          className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(calcData.npkReduction - 5) / 20 * 100}%, hsl(var(--primary) / 0.2) ${(calcData.npkReduction - 5) / 20 * 100}%, hsl(var(--primary) / 0.2) 100%)`
                          }}
                        />
                        <span className="text-2xl font-bold text-primary w-16 text-right">{calcData.npkReduction}%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Прирост урожайности, ц/га
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="1"
                          max="5"
                          step="0.1"
                          value={calcData.yieldIncrease}
                          onChange={(e) => setCalcData({...calcData, yieldIncrease: Number(e.target.value)})}
                          className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${(calcData.yieldIncrease - 1) / 4 * 100}%, hsl(var(--primary) / 0.2) ${(calcData.yieldIncrease - 1) / 4 * 100}%, hsl(var(--primary) / 0.2) 100%)`
                          }}
                        />
                        <span className="text-2xl font-bold text-primary w-16 text-right">{calcData.yieldIncrease}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Цена зерна, ₽/ц
                      </label>
                      <Input
                        type="number"
                        value={calcData.grainPrice}
                        onChange={(e) => setCalcData({...calcData, grainPrice: Number(e.target.value)})}
                        className="text-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Ваша выгода</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="DollarSign" className="text-green-600" size={24} />
                        <span className="text-sm font-medium text-muted-foreground">Экономия на NPK</span>
                      </div>
                      <p className="text-3xl font-bold text-green-600">
                        {results.npkSavings.toLocaleString()} ₽
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="TrendingUp" className="text-blue-600" size={24} />
                        <span className="text-sm font-medium text-muted-foreground">Доход от прироста урожая</span>
                      </div>
                      <p className="text-3xl font-bold text-blue-600">
                        {results.yieldRevenue.toLocaleString()} ₽
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Minus" className="text-orange-600" size={24} />
                        <span className="text-sm font-medium text-muted-foreground">Затраты на Полевой гумат PRO</span>
                      </div>
                      <p className="text-3xl font-bold text-orange-600">
                        {results.humatCost.toLocaleString()} ₽
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">~800 ₽/га</p>
                    </div>

                    <div className="bg-primary text-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Award" className="text-white" size={28} />
                        <span className="text-sm font-medium opacity-90">Чистая прибыль</span>
                      </div>
                      <p className="text-4xl font-bold mb-2">
                        {results.netProfit.toLocaleString()} ₽
                      </p>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Icon name="Percent" size={16} />
                        <span>ROI: {results.roi}%</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground text-center italic">
                      * Расчет основан на средних показателях полевых испытаний. Точные цифры зависят от ваших условий.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="text-lg px-8" onClick={() => {
                document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Получить персональный расчет
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Отвечаем на неудобные вопросы
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Честные ответы на то, что вас действительно волнует
          </p>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="item-1" className="border-2 mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                Чем ваш гумат лучше тех, что мы уже пробовали?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                Мы не предлагаем «еще один гумат». Мы встраиваемся в вашу схему питания, рассчитываем экономику и фиксируем результат. 
                Если вы не видите разницы в отчетах, продукт вам не нужен — и мы это говорим честно. Работаем с конкретными цифрами, 
                а не с общими обещаниями.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                Это не ударит по урожайности, если мы снизим норму минералки?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                Стартуем с пилотных площадей и безопасных дозировок. Решения по изменению норм вносятся только после того, 
                как вы увидите фактические данные по вашему полю и году. Никаких рискованных экспериментов на всей площади — 
                только контролируемые испытания с четкими контрольными участками.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                Наш агроном против экспериментов. Как его убедить?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                Мы говорим на языке агрономов: протоколы, агрохимия, стрессовые факторы, сухие цифры. 
                Предлагаем начать с малого участка и совместно оценить результат, не ломая действующую технологию. 
                Ваш агроном получит все данные для принятия взвешенного решения, основанного на фактах, а не на рекламе.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                Сколько времени потребуется, чтобы увидеть результат?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                Первые результаты видны уже в текущем сезоне — улучшение стрессоустойчивости и развития растений. 
                Полную картину по урожайности и экономике получаем после уборки. Для озимых культур это означает полный цикл наблюдений 
                от осенней обработки до летней уборки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                Какая минимальная площадь для пилотного проекта?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                Рекомендуем начинать с 50-100 га для получения статистически значимых данных. 
                Это позволяет корректно сравнить результаты с контрольными участками и учесть вариабельность полей. 
                Для крупных хозяйств можем организовать пилот на нескольких участках с разными почвенными условиями.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Сделайте один контролируемый эксперимент
            </h2>
            <p className="text-xl mb-2 opacity-90">
              Прежде чем снова увеличивать норму химии
            </p>
            <p className="text-lg opacity-80">
              Оставьте контакты и получите бесплатный расчет экономии и пилотную схему применения Полевого гумата PRO для ваших полей
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Название хозяйства / компании"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                  className="text-base"
                />
                <Textarea
                  placeholder="Площадь и основные культуры"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  required
                  className="text-base min-h-20"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg font-semibold">
                  Получить пилотный расчет
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Без спама. Только персональный расчет и рекомендации для вашего хозяйства.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Полевой гумат PRO. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;