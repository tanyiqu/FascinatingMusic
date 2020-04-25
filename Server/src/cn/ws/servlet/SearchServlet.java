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

public class SearchServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out=resp.getWriter();
        String searchword=req.getParameter("searchword");

        String sql = "select * from Yy";

        StringBuilder sb = new StringBuilder("[");

        try {
            ResultSet rs = DBUtil.executeQuery(sql);
            while (rs.next()){
                sb.append("{");
                sb.append("name:").append(rs.getString("yy_mz")).append(",");
                sb.append("author:").append(rs.getString("yy_zz")).append(",");
                sb.append("musicId:").append(rs.getString("yy_id"));

                sb.append("},");
            }

        } catch (Exception e){
            e.printStackTrace();
            sb = new StringBuilder("[]");
            out.println(sb);
            return;
        }
        sb.deleteCharAt(sb.length() - 1);
        sb.append("]");
        out.println(sb);

    }
}
