
        //! Fungsi ini dipanggil ketika tombol angka diklik. Itu mengambil nilai bidang input dengan id "hasil" dan menambahkan nomor yang diklik ke nilai yang ada.
        function appendNumber(num) {
            document.getElementById('result').value += num;
        }

        // Fungsi ini dipanggil ketika tombol operator (+, -, *, /) diklik. Mirip dengan appendNumber(), ini mengambil nilai bidang masukan dan menambahkan operator yang diklik ke nilai yang ada.
        function appendOperator(operator) {
            document.getElementById('result').value += operator;
        }

        // Fungsi ini dipanggil ketika tombol titik desimal diklik. Ini pertama kali mengambil nilai saat ini di kolom input. Kemudian memeriksa apakah nilainya sudah berisi titik desimal dengan menggunakan fungsi indexOf(). Jika titik desimal belum ada (ditunjukkan dengan nilai pengembalian -1), titik desimal ditambahkan ke nilai saat ini.
        function appendDecimal() {
            var currentValue = document.getElementById('result').value;
            if (currentValue.indexOf('.') === -1) {
                document.getElementById('result').value += '.';
            }
        }

        // Fungsi ini dipanggil ketika tombol sama dengan (=) diklik. Itu mengambil nilai saat ini di kolom input, mengevaluasi ekspresi menggunakan fungsi eval(), dan menyimpan hasilnya dalam variabel hasil. Akhirnya, ini menetapkan nilai bidang input ke hasil yang dihitung.
        // Harap dicatat bahwa menggunakan fungsi eval() dapat berpotensi tidak aman, karena mengeksekusi kode JavaScript apa pun yang diteruskan ke sana. Dalam skenario dunia nyata, disarankan untuk menggunakan pendekatan yang lebih aman untuk mengevaluasi ekspresi matematika.
        function calculate() {
            var result = eval(document.getElementById('result').value);
            document.getElementById('result').value = result;
        }

        //Fungsi ini dipanggil saat tombol "Hapus" diklik. Ini menetapkan nilai kolom input ke string kosong, secara efektif membersihkan hasil kalkulator.
        // Fungsi JavaScript ini langsung dipanggil dari tombol HTML menggunakan atribut onclick. Mereka memanipulasi nilai kolom input berdasarkan klik tombol pengguna untuk melakukan perhitungan dan menampilkan hasil.
        function clearResult() {
            document.getElementById('result').value = '';
        }