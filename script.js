        let accounts = [];

        // Thêm tài khoản mới
        function addAccount() {
            const username = document.getElementById('username').value;
            const balance = parseInt(document.getElementById('balance').value);
            
            if (username && balance >= 0) {
                accounts.push({ username, balance });
                updateTable();
                // Reset form
                document.getElementById('username').value = '';
                document.getElementById('balance').value = '';
            } else {
                alert('Vui lòng nhập đầy đủ thông tin hợp lệ!');
            }
        }

        // Xóa tài khoản
        function deleteAccount(index) {
            if (confirm('Bạn có chắc muốn xóa tài khoản này?')) {
                accounts.splice(index, 1);
                updateTable();
            }
        }

        // Nạp tiền
        function rechargeAccount() {
            const username = document.getElementById('rechargeUsername').value;
            const amount = parseInt(document.getElementById('rechargeAmount').value);
            
            if (username && amount > 0) {
                const account = accounts.find(acc => acc.username === username);
                if (account) {
                    account.balance += amount;
                    updateTable();
                    // Reset form
                    document.getElementById('rechargeUsername').value = '';
                    document.getElementById('rechargeAmount').value = '';
                    alert(`Đã nạp ${amount} VNĐ vào tài khoản ${username}`);
                } else {
                    alert('Không tìm thấy tài khoản!');
                }
            } else {
                alert('Vui lòng nhập thông tin hợp lệ!');
            }
        }

        // Cập nhật bảng
        function updateTable() {
            const tbody = document.getElementById('accountList');
            tbody.innerHTML = '';
            
            accounts.forEach((account, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${account.username}</td>
                    <td>${account.balance.toLocaleString('vi-VN')}</td>
                    <td>
                        <button class="delete-btn" onclick="deleteAccount(${index})">Xóa</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }