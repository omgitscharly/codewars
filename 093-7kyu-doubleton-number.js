function doubleton(num) {
    while (true) {
      num++;
      if (new Set(String(num)).size === 2)
        return num;
    }
} 