$('.datepicker').datepicker({
    firstDay:1,
    format:'yyyy-mm-dd',
    i18n: {
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        weekdays: ["Pazartesi","Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
        weekdaysShort: ["Paz","Sal", "Çar", "Per", "Cum", "Cts", "Paz"],
        weekdaysAbbrev: ["P","S", "Ç", "P", "C", "C", "P"],
        cancel:'Çıkış',
        clear:'Temizle',
        done:'Tamam'
    }
});
