import telebot
from telebot.types import ReplyKeyboardMarkup, InlineKeyboardMarkup, InlineKeyboardButton

bot = telebot.TeleBot("7527974504:AAEyMH_dhcocQ-dRwCWvtHlXux4KTQqqQww")
user_lists = []
#######################################



reply_welcome = ReplyKeyboardMarkup(one_time_keyboard=False, resize_keyboard=True, row_width=2)
reply_welcome.add("دوره های موجود","وبلاگ بیالرن", "ویژگی های ما", "پرسش های متداول", "درباره ما", "ارتباط با ما")
blur_blog = InlineKeyboardMarkup(row_width=1)
blur_blogbut1 = InlineKeyboardButton("10 استراتژی برتر در سال 2024", url="https://www.yektanet.com/blog/66009/top-10-content-marketing-strategies-2024/")
blur_blogbut2 = InlineKeyboardButton("روش های یادگیری سریع در دنیای امروز", url="https://www.yektanet.com/blog/65985/yektanet-ecpc-bidding-strategy/")
blur_blogbut3 = InlineKeyboardButton("افزایش درآمد در کشور سومالی", url="https://www.yektanet.com/blog/65901/enhanced-cpc-bidding/")
blur_blogbut4 = InlineKeyboardButton("اهمیت ترویج فرهنگ سازمانی", url="https://www.yektanet.com/blog/65773/most-popular-products-on-divar/")
blur_blogbut5 = InlineKeyboardButton("یادگیری سریع پایتون برای ورود به بازارکار", url="https://www.yektanet.com/blog/65765/10-best-google-ads-bidding-strategies/")
blur_blogbut6 = InlineKeyboardButton("تفاوت های CSS3 با Kotlin", url="https://www.yektanet.com/blog/65773/most-popular-products-on-divar/")
blur_blog.add(blur_blogbut1, blur_blogbut2, blur_blogbut3, blur_blogbut4, blur_blogbut5, blur_blogbut6)

blur_av_courses = InlineKeyboardMarkup(row_width=1)
blur_av_course1 = InlineKeyboardButton("دوره کامل یادگیری ماشین", callback_data="avML")
blur_av_course2 = InlineKeyboardButton("دوره کامل یادگیری پایتون", callback_data="avPY")
blur_av_course3 = InlineKeyboardButton("دوره کامل یادگیری جاوااسکریپت", callback_data="avJAVA")
blur_av_courses.add(blur_av_course1,blur_av_course2,blur_av_course3)




#######################################
@bot.message_handler(commands=["start"])
def welcome(mess):
    if mess.chat.id not in user_lists:
        user_lists.append(mess.chat.id)
    bot.send_message(mess.chat.id, "سلام! به ربات اختصاصی تلگرام بیالــرن خوش اومدی!\n چه کمکی از دستم برمیاد؟", reply_markup=reply_welcome)


@bot.message_handler(func=lambda mess:mess.text == "دوره های موجود")
def av_courses1(mess):
    bot.send_message(mess.chat.id, "دوره مورد نظرتو انتخاب کن" ,reply_markup=blur_av_courses)



@bot.message_handler(func=lambda mess:mess.text == "وبلاگ بیالرن")
def blog2(mess):
    bot.send_message(mess.chat.id, "مقاله مورد نظرتو انتخاب کن", reply_markup=blur_blog)


@bot.message_handler(func=lambda mess:mess.text == "ویژگی های ما")
def values3(mess):
    pass


@bot.message_handler(func=lambda mess:mess.text == "پرسش های متداول")
def faq4(mess):
    pass


@bot.message_handler(func=lambda mess:mess.text == "درباره ما")
def about_us5(mess):
    pass


@bot.message_handler(func=lambda mess:mess.text == "ارتباط با ما")
def contact6(mess):
    pass




@bot.callback_query_handler(func=lambda mess:mess.data=="avML")
def send_photo_ML(mess):
    bot.delete_message(mess.message.chat.id, message_id=mess.message.message_id)
    bot.send_photo(mess.message.chat.id, open("PM Meths.png", "rb"), caption="دوره کامل یادگیری ماشین\nدوستان من درحال حاضر باید درحال مدیریت کانبان و تسک ها باشم تا ببینم چیزی از قلم نیفتاده اما الان ساعت دو و نیم شب درحال کدزنی هستم.")

@bot.callback_query_handler(func=lambda mess:mess.data=="avPY")
def send_photo_ML(mess):
    bot.delete_message(mess.message.chat.id, message_id=mess.message.message_id)
    bot.send_photo(mess.message.chat.id, open("PM Meths.png", "rb"), caption="دوره کامل یادگیری ماشین\nدوستان من درحال حاضر باید درحال مدیریت کانبان و تسک ها باشم تا ببینم چیزی از قلم نیفتاده اما الان ساعت دو و نیم شب درحال کدزنی هستم.")

@bot.callback_query_handler(func=lambda mess:mess.data=="avJAVA")
def send_photo_ML(mess):
    bot.delete_message(mess.message.chat.id, message_id=mess.message.message_id)
    bot.send_photo(mess.message.chat.id, open("PM Meths.png", "rb"), caption="دوره کامل یادگیری ماشین\nدوستان من درحال حاضر باید درحال مدیریت کانبان و تسک ها باشم تا ببینم چیزی از قلم نیفتاده اما الان ساعت دو و نیم شب درحال کدزنی هستم.")


bot.polling()