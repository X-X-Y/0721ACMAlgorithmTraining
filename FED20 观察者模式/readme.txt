描述
请补全JavaScript代码，完成"Observer"、"Observerd"类实现观察者模式。要求如下：
1. 被观察者构造函数需要包含"name"属性和"state"属性且"state"初始值为"走路"
2. 被观察者创建"setObserver"函数用于保存观察者们
3. 被观察者创建"setState"函数用于设置该观察者"state"并且通知所有观察者
4. 观察者创建"update"函数用于被观察者进行消息通知，该函数需要打印（console.log）数据，数据格式为：小明正在走路。其中"小明"为被观察者的"name"属性，"走路"为被观察者的"state"属性
注意：
1. "Observer"为观察者，"Observerd"为被观察者