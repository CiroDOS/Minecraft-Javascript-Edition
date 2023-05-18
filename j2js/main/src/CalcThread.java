package j2js.main.src;
/*
 * This file is part of the project MinecraftJavascriptEdition
 * Project Link: <https://github.com/CiroDOS/MinecraftJavascriptEdition>
 * If you distribute this file, please, don't quit this copyright notes.
 * ¡Thank you for watching my code!
 */
class CalcThread {

    public static class Math {

        public static class Number {
            public final static char POINT = '.';
        }

        public static int calcPercentage(int percentage, int num) {
            return num * (percentage / 100);
        }

        public static int extractPercentage(int mahornum, int minornum) {
            return (minornum * 100) / mahornum;
        }

        public static int round(int num, int base) {
            return java.lang.Math.round(num / base) * base;
        }

        public static int randoming(int until, int add) {
            return (int) (java.lang.Math.random() * until) + add;
        }

        public static double multipleDivision(int num, final int[] array, final int minimum) {
            double remainder = 0;
            for (int i = 0; !(num < minimum); i++) {
                num -= array[i];
                remainder = i;
            }
            return remainder + (num / java.lang.Math.pow(10, length(num)));
        }

        public static int length(int num) {
            return String.valueOf(num).length();
        }

    }

}