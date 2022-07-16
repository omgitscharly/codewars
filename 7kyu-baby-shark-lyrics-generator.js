function babySharkLyrics(){
    s=" shark"
    fm=["Baby","Mommy","Daddy","Grandma","Grandpa"]
    d=`,${" doo".repeat(6)}`
    h="Let's go hunt"
    return fm.reduce((l,n,i)=>l+=(n+s+d+"\n").repeat(3)+n+s+"!\n","")+(h+d+"\n").repeat(3)+h+"!\n"+"Run away,…"
}