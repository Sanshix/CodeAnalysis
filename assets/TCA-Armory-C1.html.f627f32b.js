import{_ as d,r as s,o as h,c,a as e,b as r,f as i,d as a}from"./app.7698fc04.js";const t={},l=i('<h1 id="tca-armory-c1-\u4F7F\u7528\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#tca-armory-c1-\u4F7F\u7528\u624B\u518C" aria-hidden="true">#</a> TCA-Armory-C1 \u4F7F\u7528\u624B\u518C</h1><p>TCA-Armory-C1 \u5C5E\u4E8E TCA \u7684\u589E\u5F3A\u5206\u6790\u6A21\u5757\u3002</p><h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><ul><li>Objective-C/C++ \u4EE3\u7801\u89C4\u8303</li><li>C/C++/Java \u4EE3\u7801\u5B89\u5168</li></ul><h2 id="\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907" aria-hidden="true">#</a> \u51C6\u5907</h2>',5),o=a("\u9700\u8981\u4E8B\u5148\u90E8\u7F72\u597D "),u={href:"https://tencent.github.io/CodeAnalysis/zh/quickStarted/enhanceDeploy.html",target:"_blank",rel:"noopener noreferrer"},b=a("CLS \u5FAE\u670D\u52A1"),v=i('<h2 id="\u89C4\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> \u89C4\u5219\u4ECB\u7ECD</h2><h3 id="cmdinject" tabindex="-1"><a class="header-anchor" href="#cmdinject" aria-hidden="true">#</a> CmdInject</h3><h4 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u652F\u6301\u7684\u8BED\u8A00\uFF1AJava</p>',4),p=a("CmdInject \u89C4\u5219\u7528\u4E8E\u68C0\u67E5\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728"),m={href:"https://owasp.org/www-community/attacks/Command_Injection",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"\u547D\u4EE4\u884C\u6CE8\u5165\u6F0F\u6D1E",-1),f=a("\u3002 \u5F53\u4F7F\u7528 childprocess \u7B49\u6A21\u5757\u6267\u884C\u547D\u4EE4\u65F6\uFF0C\u62FC\u63A5\u4E86\u7528\u6237\u53EF\u63A7\u7684\u8F93\u5165\uFF0C\u4F1A\u5BFC\u81F4\u547D\u4EE4\u6267\u884C\u6F0F\u6D1E\u3002\u653B\u51FB\u8005\u5229\u7528\u6F0F\u6D1E\u53EF\u4EE5\u63A7\u5236\u76EE\u6807\u4E3B\u673A\u6216\u8005\u5BB9\u5668\u3002"),x=i(`<h4 id="\u53C2\u6570\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String cmd = req.getParameter(&quot;cmd&quot;);
    Runtime rt = Runtime.getRuntime();
    rt.exec(cmd); // \u89E6\u53D1\u89C4\u5219
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u9700\u8981\u8BC4\u4F30 childprocess \u7B49\u6A21\u5757\u6267\u884C\u547D\u4EE4\u7684\u4F7F\u7528\uFF0C\u5E94\u9650\u5B9A\u6216\u6821\u9A8C\u547D\u4EE4\u548C\u53C2\u6570\u7684\u5185\u5BB9\u3002</p><h3 id="pathtraversal" tabindex="-1"><a class="header-anchor" href="#pathtraversal" aria-hidden="true">#</a> PathTraversal</h3><h4 id="\u6982\u8FF0-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-1" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u652F\u6301\u7684\u8BED\u8A00\uFF1AJava</p>`,9),C=a("PathTraversal \u89C4\u5219\u7528\u4E8E\u68C0\u67E5\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728"),_={href:"https://owasp.org/www-community/attacks/Path_Traversal",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"\u8DEF\u5F84\u7A7F\u8D8A\u6F0F\u6D1E",-1),S=a("\u3002 \u64CD\u4F5C\u6587\u4EF6\u65F6\uFF0C\u5E94\u8BE5\u9650\u5B9A\u6587\u4EF6\u7684\u8DEF\u5F84\u8303\u56F4\uFF0C\u5982\u679C\u62FC\u63A5\u7528\u6237\u8F93\u5165\u5230\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u80FD\u5BFC\u81F4\u8DEF\u5F84\u7A7F\u8D8A\u6F0F\u6D1E\u3002\u653B\u51FB\u8005\u5229\u7528\u6F0F\u6D1E\u53EF\u4EE5\u8BBF\u95EE\u5230\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u7684\u4EFB\u610F\u6587\u4EF6\uFF0C\u8FD9\u53EF\u80FD\u5BFC\u81F4\u4FE1\u606F\u6CC4\u6F0F\u7B49\u95EE\u9898\u3002"),q=i(`<h4 id="\u53C2\u6570\u8BBE\u7F6E-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-1" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String image = req.getParameter(&quot;image&quot;);
    File file = new File(&quot;resources/images/&quot;, image); // \u89E6\u53D1\u89C4\u5219

    if (!file.exists()) {
        return Response.status(Status.NOT_FOUND).build();
    }

    return Response.ok().entity(new FileInputStream(file)).build();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-1" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u6309\u4E1A\u52A1\u9700\u6C42\uFF0C\u4F7F\u7528\u767D\u540D\u5355\u9650\u5B9A\u540E\u7F00\u8303\u56F4\uFF0C\u6821\u9A8C\u5E76\u9650\u5B9A\u6587\u4EF6\u8DEF\u5F84\u8303\u56F4\u3002</p><h3 id="sqlinject" tabindex="-1"><a class="header-anchor" href="#sqlinject" aria-hidden="true">#</a> SQLInject</h3><h4 id="\u6982\u8FF0-2" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-2" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u652F\u6301\u7684\u8BED\u8A00\uFF1AJava</p>`,9),O=a("SQLInject \u89C4\u5219\u7528\u4E8E\u68C0\u67E5\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728"),P={href:"https://en.wikipedia.org/wiki/SQL_injection",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"SQL\u6CE8\u5165\u6F0F\u6D1E",-1),k=a("\u3002 \u9519\u8BEF\u7684\u62FC\u63A5\u7528\u6237\u53EF\u63A7\u7684\u503C\u5230 sql \u8BED\u53E5\uFF0C\u53EF\u80FD\u5BFC\u81F4 sql \u6CE8\u5165\u6F0F\u6D1E\u3002\u653B\u51FB\u8005\u53EF\u4EE5\u4FEE\u6539 sql \u8BED\u6CD5\u6765\u66F4\u6539\u67E5\u8BE2\u7684\u76EE\u6807\u6216\u7ED3\u679C\uFF0C\u6CC4\u9732\u6570\u636E\u5E93\u654F\u611F\u4FE1\u606F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528SQL\u6587\u4EF6\u64CD\u4F5C\u653B\u51FB\u5E95\u5C42Web\u670D\u52A1\u5668\u3002\u5982\u679C\u4F7F\u7528\u8BE5 sql \u67E5\u8BE2\u8FDB\u884C\u6388\u6743\u8BA4\u8BC1\uFF0C\u653B\u51FB\u8005\u8FD8\u53EF\u4EE5\u7528\u4E8E\u63D0\u6743\u3002"),E=i(`<h4 id="\u53C2\u6570\u8BBE\u7F6E-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-2" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String id = req.getParameter(&quot;id&quot;);
    Connection conn = null;
    Statement statement = null;
    ResultSet rs = null;

    Class.forName(&quot;com.mysql.cj.jdbc.Driver&quot;);
    conn = DriverManager.getConnection(&quot;jdbc:mysql://localhost:3306/sec_sql&quot;, &quot;root&quot;, &quot;admin888&quot;);
    String sql = &quot;select * from userinfo where id = &quot; + id;
    statement = conn.createStatement();
    statement.executeUpdate(sql); // \u89E6\u53D1\u89C4\u5219
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-2" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-2" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>SQL \u8BED\u53E5\u9ED8\u8BA4\u4F7F\u7528\u9884\u7F16\u8BD1\u5E76\u7ED1\u5B9A\u53D8\u91CF\uFF0C\u4F7F\u7528\u5B89\u5168\u7684ORM\u64CD\u4F5C\u3002</p><h3 id="ssrf" tabindex="-1"><a class="header-anchor" href="#ssrf" aria-hidden="true">#</a> SSRF</h3><h4 id="\u6982\u8FF0-3" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-3" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u652F\u6301\u7684\u8BED\u8A00\uFF1AJava</p>`,9),R=a("SSRF \u89C4\u5219\u7528\u4E8E\u68C0\u67E5\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728"),A={href:"https://en.wikipedia.org/wiki/Server-side_request_forgery",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"\u670D\u52A1\u7AEF\u8BF7\u6C42\u4F2A\u9020\u6F0F\u6D1E SSRF(Server-side request forgery)",-1),w=a("\u3002 \u653B\u51FB\u8005\u5728\u672A\u80FD\u53D6\u5F97\u670D\u52A1\u5668\u6240\u6709\u6743\u9650\u65F6\uFF0C\u5229\u7528\u670D\u52A1\u5668\u6F0F\u6D1E\u4EE5\u670D\u52A1\u5668\u7684\u8EAB\u4EFD\u53D1\u9001\u4E00\u6761\u6784\u9020\u597D\u7684\u8BF7\u6C42\u7ED9\u670D\u52A1\u5668\u6240\u5728\u5185\u7F51\u3002"),M=i(`<h4 id="\u53C2\u6570\u8BBE\u7F6E-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-3" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf(csrf -&gt;
        csrf.disable() // \u89E6\u53D1\u89C4\u5219
      );
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-3" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-3" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u9650\u5B9A\u8BBF\u95EE\u7F51\u7EDC\u8D44\u6E90\u5730\u5740\u8303\u56F4\uFF0C\u8BF7\u6C42\u7F51\u7EDC\u8D44\u6E90\u5E94\u52A0\u5BC6\u4F20\u8F93\u3002</p><h3 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h3><h4 id="\u6982\u8FF0-4" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-4" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u652F\u6301\u7684\u8BED\u8A00\uFF1AJava</p>`,9),T=a("XSS \u89C4\u5219\u7528\u4E8E\u68C0\u67E5\u4EE3\u7801\u4E2D\u662F\u5426\u5B58\u5728"),B={href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u6F0F\u6D1E XSS(Cross-site scripting)",-1),I=a("\u3002 \u5982\u679C web \u9875\u9762\u5728\u52A8\u6001\u5C55\u793A\u6570\u636E\u65F6\u4F7F\u7528\u4E86\u7528\u6237\u7684\u8F93\u5165\u5185\u5BB9\uFF0C\u6CA1\u6709\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FC7\u6EE4\u6216\u8005\u8FDB\u884C\u8F6C\u4E49\uFF0C\u9ED1\u5BA2\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u4F20\u5165\u6076\u610F\u4EE3\u7801\uFF0C\u5F53\u7528\u6237\u6D4F\u89C8\u8BE5\u9875\u9762\u65F6\u6076\u610F\u4EE3\u7801\u4F1A\u88AB\u6267\u884C\u3002"),V=i(`<h4 id="\u53C2\u6570\u8BBE\u7F6E-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-4" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>void bad(HttpServletRequest req, HttpServletResponse resp){
    String id = request.getParameter(&quot;id&quot;) != null ? request.getParameter(&quot;id&quot;) : &quot;0&quot;;
    Doc doc = getdetailsById(id);    
    byte[] b = doc.getUploaded();        
    try {
        response.setContentType(&quot;APPLICATION/OCTET-STREAM&quot;);
        String disHeader = &quot;Attachment;Filename=&quot; + doc.getName();
        response.setHeader(&quot;Content-Disposition&quot;, disHeader);
        ServletOutputStream out = response.getOutputStream();
        out.print(b); // \u89E6\u53D1\u89C4\u5219
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-4" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-4" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u5728\u8F93\u51FA\u6240\u6709\u7528\u6237\u53EF\u63A7\u7684\u6570\u636E\u65F6, \u5BF9\u6570\u636E\u505A\u8F6C\u4E49\u6216\u8005\u7F16\u7801\u3002</p><h3 id="objectivec-copyright" tabindex="-1"><a class="header-anchor" href="#objectivec-copyright" aria-hidden="true">#</a> ObjectiveC/Copyright</h3><h4 id="\u6982\u8FF0-5" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-5" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u6587\u4EF6\u7684copyright\u4FE1\u606F\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-5" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-5" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-objc ext-objc line-numbers-mode"><pre class="language-objc"><code>// \u89E6\u53D1\u89C4\u5219
@interface Test : NSObject
@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-5" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-5" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u5728\u4EE3\u7801\u6587\u4EF6\u5934\u90E8\u6DFB\u52A0 Copyright \u4FE1\u606F\u3002\u6BD4\u5982\uFF1A</p><div class="language-objc ext-objc line-numbers-mode"><pre class="language-objc"><code>// Copyright (c) xxxx Tencent. All rights reserved.
//

@interface Test : NSObject
@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objectivec-indent" tabindex="-1"><a class="header-anchor" href="#objectivec-indent" aria-hidden="true">#</a> ObjectiveC/Indent</h3><h4 id="\u6982\u8FF0-6" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-6" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u6587\u4EF6\u7684\u7F29\u8FDB\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-6" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>IndentStyle: \u53EF\u9009 spaces \u7A7A\u683C \u548C tabs <code>\\t</code> \uFF0C\u9ED8\u8BA4\u662F spaces\uFF1B</li><li>IndentSize: \u7F29\u8FDB\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u662F4\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>IndentStyle=spaces
IndentSize=4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-6" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-6" aria-hidden="true">#</a> \u793A\u4F8B</h4><div class="language-objc ext-objc line-numbers-mode"><pre class="language-objc"><code>for (int i = 0; i &lt; 10; i++) {
  doThings(); // \u89E6\u53D1\u89C4\u5219
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u590D\u5EFA\u8BAE-6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-6" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u8C03\u6574\u4E3A\u5BF9\u5E94\u7684\u7F29\u8FDB\u65B9\u5F0F\u3002\u6BD4\u5982\u9ED8\u8BA4\u662F4\u4E2A\u7A7A\u683C\u7F29\u8FDB\u3002</p><div class="language-objc ext-objc line-numbers-mode"><pre class="language-objc"><code>for (int i = 0; i &lt; 10; i++) {
    doThings(); // \u89E6\u53D1\u89C4\u5219
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="objectivec-maxlinesperfunction" tabindex="-1"><a class="header-anchor" href="#objectivec-maxlinesperfunction" aria-hidden="true">#</a> ObjectiveC/MaxLinesPerFunction</h3><h4 id="\u6982\u8FF0-7" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-7" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D\u8D85\u51FA\u884C\u6570\u957F\u5EA6\u9608\u503C\u7684\u51FD\u6570\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-7" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-7" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>LineThreshold: \u65B9\u6CD5\u957F\u5EA6\u9608\u503C\uFF0C\u9ED8\u8BA4\u662F100\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>LineThreshold=100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-7" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-7" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-7" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-7" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u53EF\u4EE5\u57FA\u4E8E\u5355\u4E00\u804C\u8D23\u539F\u5219\u62C6\u5206\u51FD\u6570\uFF0C\u7F29\u51CF\u51FD\u6570\u957F\u5EA6\u3002</p><h3 id="objectivec-missingdocinterface" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocinterface" aria-hidden="true">#</a> ObjectiveC/MissingDocInterface</h3><h4 id="\u6982\u8FF0-8" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-8" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D interface \u662F\u5426\u6709\u6CE8\u91CA\u4FE1\u606F\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-8" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-8" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-8" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-8" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-8" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-8" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4E3A inferface \u589E\u52A0\u6CE8\u91CA\u3002</p><h3 id="objectivec-missingdocproperty" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocproperty" aria-hidden="true">#</a> ObjectiveC/MissingDocProperty</h3><h4 id="\u6982\u8FF0-9" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-9" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Property \u662F\u5426\u6709\u6CE8\u91CA\u4FE1\u606F\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-9" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-9" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-9" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-9" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-9" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-9" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4E3A Property \u589E\u52A0\u6CE8\u91CA\u3002</p><h3 id="objectivec-missingdocprotocol" tabindex="-1"><a class="header-anchor" href="#objectivec-missingdocprotocol" aria-hidden="true">#</a> ObjectiveC/MissingDocProtocol</h3><h4 id="\u6982\u8FF0-10" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-10" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Protocol \u662F\u5426\u6709\u6CE8\u91CA\u4FE1\u606F\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-10" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-10" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><p>\u65E0</p><h4 id="\u793A\u4F8B-10" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-10" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-10" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-10" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4E3A Protocol \u589E\u52A0\u6CE8\u91CA\u3002</p><h3 id="objectivec-parametercount" tabindex="-1"><a class="header-anchor" href="#objectivec-parametercount" aria-hidden="true">#</a> ObjectiveC/ParameterCount</h3><h4 id="\u6982\u8FF0-11" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-11" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D\u65B9\u6CD5\u7684\u53C2\u6570\u4E2A\u6570\u662F\u5426\u8D85\u8FC7\u9608\u503C\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-11" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-11" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>Max: \u53C2\u6570\u4E2A\u6570\u9608\u503C\uFF0C\u9ED8\u8BA4\u662F6\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>Max=6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-11" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-11" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-11" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-11" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u53C2\u6570\u4E2A\u6570\u8D8A\u5C11\u8D8A\u597D\uFF0C\u591A\u4E8E 6 \u4E2A\u53C2\u6570\u65F6\u5EFA\u8BAE\u8003\u8651\u91CD\u6784\u3002</p><h3 id="objectivec-classnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-classnaming" aria-hidden="true">#</a> ObjectiveC/ClassNaming</h3><h4 id="\u6982\u8FF0-12" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-12" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D class \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-12" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-12" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>ClassCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F CamelCase\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>ClassCase=CamelCase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-12" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-12" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-12" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-12" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 class \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-functionnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-functionnaming" aria-hidden="true">#</a> ObjectiveC/FunctionNaming</h3><h4 id="\u6982\u8FF0-13" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-13" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Function \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-13" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-13" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>FunctionCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F camelBack\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>FunctionCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-13" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-13" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-13" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-13" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 Function \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-globalvariablenaming" tabindex="-1"><a class="header-anchor" href="#objectivec-globalvariablenaming" aria-hidden="true">#</a> ObjectiveC/GlobalVariableNaming</h3><h4 id="\u6982\u8FF0-14" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-14" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D GlobalVariable \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-14" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-14" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>GlobalVariablePrefix: \u5168\u5C40\u53D8\u91CF\u524D\u7F00\uFF0C\u9ED8\u8BA4\u662F <code>g</code> \uFF1B</li><li>GlobalVariableCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F camelBack\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>GlobalVariablePrefix=g
GlobalVariableCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-14" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-14" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-14" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-14" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 GlobalVariable \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-localvariablenaming" tabindex="-1"><a class="header-anchor" href="#objectivec-localvariablenaming" aria-hidden="true">#</a> ObjectiveC/LocalVariableNaming</h3><h4 id="\u6982\u8FF0-15" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-15" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D LocalVariable \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-15" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-15" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>LocalVariableCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F camelBack\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>LocalVariableCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-15" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-15" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-15" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-15" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 LocalVariable \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-macronaming" tabindex="-1"><a class="header-anchor" href="#objectivec-macronaming" aria-hidden="true">#</a> ObjectiveC/MacroNaming</h3><h4 id="\u6982\u8FF0-16" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-16" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Macro \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-16" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-16" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>MacroCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F UPPER_CASE\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>MacroCase=UPPER_CASE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-16" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-16" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-16" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-16" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 Macro \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-methodnaming" tabindex="-1"><a class="header-anchor" href="#objectivec-methodnaming" aria-hidden="true">#</a> ObjectiveC/MethodNaming</h3><h4 id="\u6982\u8FF0-17" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-17" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Method \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-17" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-17" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>MethodCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F camelBack\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>MethodCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-17" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-17" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-17" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-17" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 Method \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-parameternaming" tabindex="-1"><a class="header-anchor" href="#objectivec-parameternaming" aria-hidden="true">#</a> ObjectiveC/ParameterNaming</h3><h4 id="\u6982\u8FF0-18" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-18" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D Parameter \u540D\u79F0\u662F\u5426\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-18" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-18" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>ParameterCase: \u547D\u540D\u683C\u5F0F\uFF0C\u53EF\u9009 CamelCase \u9996\u5B57\u6BCD\u5C0F\u5199\u9A7C\u5CF0\u5F0F\u3001UPPER_CASE \u5168\u90E8\u5927\u5199\u3001LOWER_CASE \u5168\u90E8\u5C0F\u5199\u3001camelBack \u9996\u5B57\u6BCD\u5927\u5199\u9A7C\u5CF0\u5F0F\uFF0C\u9ED8\u8BA4\u662F camelBack\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>ParameterCase=camelBack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-18" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-18" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-18" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-18" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u4FEE\u6539 Parameter \u540D\u79F0\u7B26\u5408\u547D\u540D\u89C4\u8303\u3002</p><h3 id="objectivec-maxlinelength" tabindex="-1"><a class="header-anchor" href="#objectivec-maxlinelength" aria-hidden="true">#</a> ObjectiveC/MaxLineLength</h3><h4 id="\u6982\u8FF0-19" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-19" aria-hidden="true">#</a> \u6982\u8FF0</h4><p>\u68C0\u67E5 Objective-C/C++ \u4EE3\u7801\u4E2D\u4E00\u884C\u957F\u5EA6\u662F\u5426\u8D85\u8FC7\u9608\u503C\u3002</p><h4 id="\u53C2\u6570\u8BBE\u7F6E-19" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BBE\u7F6E-19" aria-hidden="true">#</a> \u53C2\u6570\u8BBE\u7F6E</h4><ul><li>tabWidth: \u7F29\u8FDB\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u662F4\uFF1B</li><li>MaxLineLength: \u957F\u5EA6\u9608\u503C\uFF0C\u9ED8\u8BA4\u662F150\u3002</li></ul><p>\u53C2\u8003\u4EE5\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>tabWidth=4
MaxLineLength=150
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u793A\u4F8B-19" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-19" aria-hidden="true">#</a> \u793A\u4F8B</h4><p>\u65E0\u3002</p><h4 id="\u4FEE\u590D\u5EFA\u8BAE-19" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u590D\u5EFA\u8BAE-19" aria-hidden="true">#</a> \u4FEE\u590D\u5EFA\u8BAE</h4><p>\u901A\u8FC7\u6362\u884C\u3001\u4F18\u5316\u903B\u8F91\u7B49\u65B9\u5F0F\uFF0C\u7F29\u51CF\u4E00\u884C\u957F\u5EA6\u3002</p>`,165);function W(F,H){const n=s("ExternalLinkIcon");return h(),c("div",null,[l,e("ul",null,[e("li",null,[o,e("a",u,[b,r(n)])])]),v,e("p",null,[p,e("a",m,[g,r(n)]),f]),x,e("p",null,[C,e("a",_,[j,r(n)]),S]),q,e("p",null,[O,e("a",P,[y,r(n)]),k]),E,e("p",null,[R,e("a",A,[L,r(n)]),w]),M,e("p",null,[T,e("a",B,[N,r(n)]),I]),V])}const D=d(t,[["render",W],["__file","TCA-Armory-C1.html.vue"]]);export{D as default};
