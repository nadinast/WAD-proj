package upload;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;
import upload.SpringWebMvcConfig;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;
import java.io.File;

public class WebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    private int maxFileSize = 10 * 1024 * 1024;

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringWebMvcConfig.class};
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return null;
    }

    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {

        // upload temp file will put here
        File uploadDirectory = new File(System.getProperty("java.io.tmpdir"));

        // register a MultipartConfigElement
        MultipartConfigElement multipartConfigElement =
                new MultipartConfigElement(uploadDirectory.getAbsolutePath(),
                        maxFileSize, maxFileSize * 2, maxFileSize / 2);

        registration.setMultipartConfig(multipartConfigElement);

    }
}
