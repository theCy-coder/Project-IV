/**
 * Vigenere Library
 */
const dict=[{A:1},{B:2},{C:3},{D:4},{E:5},{F:6},{G:7},{H:8},{I:9},{J:10},{K:11},{L:12},{M:13},{N:14},{O:15},{P:16},{Q:17},{R:18},{S:19},{T:20},{U:21},{V:22},{W:23},{X:24},{Y:25},{Z:26},{0:27},{1:28},{2:29},{3:30},{4:31},{5:32},{6:33},{7:34},{8:35},{9:36}];let keys=dict.map((e=>Object.keys(e))).flat();function isUpperCase(e){return/[A-Z]/.test(e)}function isCharacter(e){return/\w|\d/.test(e)}function isLetter(e){return/\w/.test(e)}class Vigenere{constructor(){this.key=(()=>{let e="";for(let t=0;t<15;t++){let t=Math.floor(Math.random()*dict.length),s=keys[t];t%2==0&&(s=s.toLowerCase()),e+=s}return e})()}salt(e){this.key=e}cipher(e){let t=0;const s=e.split(""),r=this.key,o=r.length;let l=0,n=[],i=[];for(;t<s.length;){let e,a,p,c,h=!1;if(a=s[t],isCharacter(a)){if(l=o-1<l?0:l,e=r[l].toUpperCase(),!isUpperCase(a)){let e=a.toUpperCase();a=e,h=!0}let t=keys.indexOf(a)+keys.indexOf(e);t=t>=keys.length?t-keys.length:t,p=keys[t];let s=p.toLowerCase();c=isLetter(a)&&h?s:p,l++}n.push(isCharacter(a)?c:a),i.push(e),t++}return n.join("")}decipher(e){let t=0;const s=e.split(""),r=this.key,o=r.length;let l=0,n=[];for(;t<s.length;){let e,i,a,p,c=!1;if(i=s[t],isCharacter(i)){l=o-1<l?0:l,e=r[l].toUpperCase(),isUpperCase(i)||(i=i?.toUpperCase(),c=!0);let t=keys.indexOf(i)-keys.indexOf(e);t=t<0?t+keys.length:t,a=keys[t],p=isLetter(i)&&c?a?.toLowerCase():a,l++}n.push(isCharacter(i)?p:i),t++}return n.join("")}}

const passphrase = [
    'orczo0j1t8tp6zx8you9y1z6wr0zr49lnupob7sidhe2yvvwye5uyd',
    'or9koytx9y1m4vo2ezkuhuuvva9kvtyuiu1qzw5c3lh62zovlv7ehtblu',
    'x4blsbzxsdvtssi8ylzsioveudwyx9ykia0uzw0e3kh8whrwjkrzmi5nvbbllg',
    'v12yt7yre2tib5dwzsiu0hueub6swvxvbdprbcye7s1t86i35h4xla9lg',
    'kr5mea0u50lnsu1a2teuvs6yyu5jkr7nev1ut1pndpds5lu5zs54ln',
    'hx0pnynxzxpny0kvcps9ltb2ye1hl2vyesri2unsbpf1eud9lv9c1ryluf',
    'dx8uihpqx11sthqu9lrulqa61szpqvczc0sd4dyowui5bje9zsbd0e9xxrxya50',
    'srb0nwyv28wi5nvr7ksbvqvuwp3pfr70f3vx4xlr6hntuzcskhs5hnuol40',
    'gr7ne9jkr8zf9vptbps7s1tu0scwh3vhr2qdt4hlalq9ehl35'
]
const HashPuppy = {
    getHash: function(){
        let vg = new Vigenere();
        vg.salt("asndfjlj65165184sdf516s5d1f64s98d4ter161g32f16g216tr4h651x3b2v");
        let rdm = Math.floor(Math.random()*passphrase.length);
        return vg.cipher(passphrase[rdm]);
    },
    isMatch: function(str){
        let vg = new Vigenere();
        vg.salt("asndfjlj65165184sdf516s5d1f64s98d4ter161g32f16g216tr4h651x3b2v");
        let deciphered = vg.decipher(str);
        const match = value=>value===deciphered;
        return passphrase.some(match);
    }
}   

export default HashPuppy;