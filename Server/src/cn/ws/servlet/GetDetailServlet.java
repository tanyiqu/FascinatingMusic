package cn.ws.servlet;

import cn.ws.utils.DBUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

//测试 http://localhost:8081//Server/detail?musicId=0000001
public class GetDetailServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        String musicId = req.getParameter("musicId");

        String sql = String.format("select * from Yy where yy_id = '%s'", musicId);

        StringBuilder sb = new StringBuilder("{");
        ResultSet rs = DBUtil.executeQuery(sql);

        try {
            rs.next();
            sb.append("\"audiosrc\":\"").append(rs.getString("yy_ydz")).append("\",");
            sb.append("\"author\":\"").append(rs.getString("yy_zz")).append("\",");
            sb.append("\"cover\":\"").append(rs.getString("yy_fmdz")).append("\",");
            sb.append("\"name\":\"").append(rs.getString("yy_mz")).append("\"");
        } catch (SQLException e){
            e.printStackTrace();
            out.println("{[\"audiosrc\":\"\",\"cover\":\"\",\"name\":\"暂无名字\",\"author\":\"暂无作者\"]}");
            return;
        }

        sb.append("}");

        out.println(sb);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
